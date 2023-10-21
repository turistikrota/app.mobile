import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Props as PaginationProps } from "./pagination";

const NUM_OF_DUP = 3;

const approximatelyEqualTo = (a: number, b: number, epsilon = 0.01) =>
  Math.abs(a - b) < epsilon;

type Props<T = any> = {
  renderItem: (data: T) => JSX.Element;
  data?: Array<T>;
  loop?: boolean;
  autoplay?: boolean;
  initialPage?: number; // İlk sayfa başlangıcı için initialPage prop'u eklendi
  autoplayInterval?: number;
  Pagination?: React.FC<PaginationProps>;
  onPage?: (prev: number, current: number) => void;
};

function Carousel<T = any>({
  data = [],
  loop = false,
  autoplay = false,
  initialPage, // Başlangıç sayfası için initialPage kullanılacak
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

  const isLooped = useMemo(() => loop && data.length > 1, [loop, data]);

  useEffect(() => {
    if (!initialPage) return;
    // initialPage prop'u güncellendiğinde sayfayı ayarla
    setCurrentPage(initialPage);
    scrollToPage(initialPage);
  }, [initialPage]);

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
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setAutoPlay(false);
    const _childWidth =
      childWidth === 0 ? event.nativeEvent.layoutMeasurement.width : childWidth;
    const rawCurrentPage = event.nativeEvent.contentOffset.x / _childWidth;
    const roundCurrentPage = Math.round(rawCurrentPage);
    const _currentPage = roundCurrentPage + 1;

    if (_currentPage !== currentPage) {
      setCurrentPage(_currentPage);
      if (onPage) onPage(currentPage, _currentPage);
    }
  };

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    const loopOffset = data.length >= NUM_OF_DUP ? NUM_OF_DUP : data.length;
    const childrenNum = isLooped ? data.length + loopOffset * 2 : data.length;
    const newChildWidth = contentWidth / childrenNum;
    setChildWidth(newChildWidth);
    if (autoplay) {
      setAutoPlay(true);
    }
    if (initialPage) scrollToPage(initialPage, newChildWidth);
  };

  const scrollToPage = (page: number, _childWidth?: number) => {
    const cWidth = _childWidth || childWidth;
    if (page < 1) {
      page = 1;
    } else if (page > data.length) {
      page = data.length;
    }

    const loopOffset = isLooped
      ? data.length >= NUM_OF_DUP
        ? NUM_OF_DUP
        : data.length
      : 0;
    const scrollX = cWidth * (page + loopOffset - 1);

    scrollView.current?.scrollTo({
      x: scrollX,
      animated: false,
    });

    setCurrentPage(page);
  };

  const renderItems = () => {
    let normalizedData = data;
    return normalizedData.map((item, index) => {
      const normalizedIndex = index;
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
