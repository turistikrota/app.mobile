import React, { useMemo, useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useAlert } from "~hooks/alert";
import { Props as PaginationProps } from "./pagination";

const NUM_OF_DUP = 3;

const approximatelyEqualTo = (a: number, b: number, epsilon = 0.01) =>
  Math.abs(a - b) < epsilon;

type Props<T = any> = {
  renderItem: (data: T) => JSX.Element;
  data?: Array<T>;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  Pagination?: React.FC<PaginationProps>;
  onPage?: (prev: number, current: number) => void;
};

function Carousel<T = any>({
  data = [],
  loop = false,
  autoplay = false,
  autoplayInterval = 2000,
  Pagination,
  renderItem,
  onPage = () => {},
}: Props<T>) {
  const scrollView = useRef<ScrollView>(null);
  const [autoplayTimeoutID, setAutoplayTimeoutId] =
    useState<NodeJS.Timeout | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [childWidth, setChildWidth] = useState(0);
  const alert = useAlert();

  const isLooped = useMemo(() => loop && data.length > 1, [loop, data]);

  const setAutoPlay = (start: boolean) => {
    if (!start) return clearTimeout(autoplayTimeoutID as NodeJS.Timeout);
    setAutoplayTimeoutId(
      setTimeout(() => {
        const isLastPage = data.length === currentPage;
        let scrollX;
        if (isLooped) {
          const loopOffset =
            data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
          scrollX = childWidth * (currentPage + loopOffset);
        } else {
          scrollX = isLastPage ? 0 : childWidth * currentPage;
        }
        scrollView.current?.scrollTo({
          x: scrollX,
          animated: true,
        });
      }, autoplayInterval)
    );
    setAutoPlay(false);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setAutoPlay(false);
    let loopOffset = 0;
    if (isLooped) {
      loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
    }
    let _childWith =
      childWidth === 0 ? event.nativeEvent.layoutMeasurement.width : childWidth;
    const prevPage = currentPage;
    const rawCurrentPage = event.nativeEvent.contentOffset.x / _childWith;
    const roundCurrentPage = Math.round(rawCurrentPage);
    const normalizedPage = roundCurrentPage - loopOffset;
    let _currentPage = normalizedPage + 1;
    if (normalizedPage < 0) {
      _currentPage = data.length + normalizedPage + 1;
    } else if (normalizedPage >= data.length) {
      _currentPage = (normalizedPage % data.length) + 1;
    }
    const isScrollEnd = approximatelyEqualTo(rawCurrentPage, roundCurrentPage);
    if (
      isLooped &&
      isScrollEnd &&
      (normalizedPage < 0 || normalizedPage >= data.length)
    ) {
      scrollView.current?.scrollTo({
        x: (_currentPage - 1 + loopOffset) * _childWith,
        animated: false,
      });
    }
    if (isScrollEnd && autoplay) {
      setAutoPlay(true);
    }
    if (_currentPage !== prevPage) {
      setCurrentPage(_currentPage);
      if (onPage) onPage(prevPage, _currentPage);
    }
  };

  const onContentSizeChange = (w: number, h: number) => {
    const loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
    const childrenNum = isLooped ? data.length + loopOffset * 2 : data.length;
    setChildWidth(w / childrenNum);
    if (isLooped) {
      scrollView.current?.scrollTo({
        x: childWidth * loopOffset,
        animated: false,
      });
    }
    if (autoplay) {
      setAutoPlay(true);
    }
  };

  const renderItems = () => {
    let normalizedData = data;
    let loopOffset = 0;
    if (isLooped) {
      const frontDup = data.slice(-NUM_OF_DUP);
      const endDup = data.slice(0, NUM_OF_DUP);
      loopOffset = frontDup.length;
      normalizedData = frontDup.concat(data, endDup);
    }

    return normalizedData.map((item, index) => {
      const normalizedIndex = index - loopOffset;
      let renderIndex = normalizedIndex % data.length;
      renderIndex = renderIndex < 0 ? data.length + renderIndex : renderIndex;
      const renderedItem = renderItem(item);
      let { key } = renderedItem;
      if (normalizedIndex < 0) {
        key = `${key}-front-dup`;
      } else if (normalizedIndex >= data.length) {
        key = `${key}-end-dup`;
      }
      return <React.Fragment key={key}>{renderedItem}</React.Fragment>;
    });
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        style={[
          styles.scrollView,
          { width: data.length === 0 ? 0 : childWidth },
        ]}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
        onContentSizeChange={onContentSizeChange}
      >
        {renderItems()}
      </ScrollView>
      {Pagination && (
        <Pagination currentPage={currentPage} total={data.length} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
});

export default Carousel;
