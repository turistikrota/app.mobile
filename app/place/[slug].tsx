import { ScrollView, StatusBar, Text, View } from "@gluestack-ui/themed";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Share,
} from "react-native";
import DynamicHeader from "~components/DynamicHeader";
import { Sites, getSiteByLocale } from "~config/sites";
import PlaceImageCarousel from "~partials/place/card/PlaceImageCarousel";
import { getLocale } from "~types/i18n";
import { imageSort } from "~utils/sort";

type Params = {
  slug?: string;
  images?: string;
  translations?: string;
};

export default function PlaceDetailPage() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [statusBarIsLight, setStatusBarIsLight] = React.useState(true);
  const params = useLocalSearchParams<Params>();
  const [shareLoading, setShareLoading] = React.useState(false);
  const { t, i18n } = useTranslation("place");

  const parsedData = useMemo(() => {
    try {
      const images = JSON.parse(params.images || "[]");
      const translations = JSON.parse(params.translations || "{}");
      return {
        images,
        translations,
        exists: true,
      };
    } catch (e) {
      return {
        images: [],
        translations: {},
        exists: false,
      };
    }
  }, [params]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
      useNativeDriver: false,
    })(e);
    if (e.nativeEvent.contentOffset.y > 314 && statusBarIsLight) {
      setStatusBarIsLight(false);
    } else if (e.nativeEvent.contentOffset.y < 314 && !statusBarIsLight) {
      setStatusBarIsLight(true);
    }
  };

  const onShare = async () => {
    setShareLoading(true);
    Share.share({
      url: `${getSiteByLocale(Sites.Place, getLocale(i18n.language))}/${
        params.slug
      }`,
      title: "Turistikrota",
    })
      .then((res) => {})
      .catch(() => {})
      .finally(() => setShareLoading(false));
  };

  return (
    <View
      sx={{
        height: "100%",
        bg: "$white",
      }}
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle={statusBarIsLight ? "light-content" : "dark-content"}
      />
      <DynamicHeader
        animHeaderValue={scrollOffsetY}
        title={parsedData.translations.tr.title}
        leftIcon="arrow-back"
        leftPress={() => router.back()}
        rightIcon="export"
        rightLoading={shareLoading}
        rightPress={onShare}
      >
        {parsedData.exists && (
          <PlaceImageCarousel
            list={imageSort(parsedData.images)}
            title={parsedData.translations.title}
            calcWidth={(w) => w}
            calcHeight={(w) => w}
          />
        )}
      </DynamicHeader>
      <ScrollView scrollEventThrottle={16} onScroll={onScroll}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          accusamus nulla quos. Aspernatur quidem ab nisi est labore reiciendis
          veniam minus, veritatis necessitatibus, praesentium possimus. Magni
          voluptate earum fugit voluptatibus sed repellendus natus quam,
          laudantium commodi! Dignissimos iure eligendi explicabo dolor dolore
          placeat veritatis eaque! Repellendus magni ad impedit, sit
          necessitatibus ab obcaecati! Provident id fugiat sit fugit, omnis
          voluptas ducimus, reiciendis dolorem unde accusamus neque saepe.
          Reiciendis ipsam dolor repellendus saepe dolore nemo? Aliquam ducimus
          porro aut non praesentium. At ratione molestiae eligendi. Omnis soluta
          reiciendis ducimus illo neque ipsa cupiditate qui cumque in nam
          perspiciatis, consectetur dolore reprehenderit quasi distinctio,
          voluptatem eveniet doloremque incidunt? Adipisci doloribus reiciendis
          officia dicta minus, odio quia. Provident quo doloremque explicabo
          hic. Debitis sed impedit corrupti quas facere animi, qui nostrum
          veniam architecto cupiditate eveniet, modi sunt nulla laboriosam culpa
          blanditiis? Iure illo adipisci et commodi, dolor unde perferendis quae
          quas deleniti. Iusto, ratione nemo. Corporis officia corrupti,
          provident culpa laudantium aut animi illum nemo tempora eos ex dolorem
          commodi eveniet perspiciatis similique impedit minus ullam nostrum
          maxime obcaecati, doloribus alias voluptatibus? Eos rerum adipisci
          quisquam debitis provident incidunt explicabo eum sapiente ea
          molestias asperiores ratione nemo accusamus necessitatibus quos
          quibusdam eligendi similique beatae a nulla hic, deleniti suscipit
          blanditiis quam. Aspernatur inventore voluptates vero ipsam omnis
          pariatur exercitationem natus. Consequuntur at iusto doloremque
          blanditiis! Impedit minima odit veniam ratione illum iusto adipisci
          cumque quae. Expedita assumenda quaerat et hic vero, rerum alias nobis
          incidunt ipsa ipsum molestias esse tenetur vel exercitationem soluta
          dolor, quidem sit itaque excepturi tempora iste saepe. In, ratione
          esse, maiores blanditiis ipsa quisquam labore minima exercitationem
          veritatis nisi, officiis adipisci pariatur. Rerum, alias consequuntur.
          Maiores cupiditate vel, iste iure consectetur veniam quia ut! Maiores
          officia suscipit et. Quae non nam quaerat adipisci voluptatem aliquid
          dicta nesciunt vero incidunt? Perspiciatis sapiente a excepturi
          inventore! Illum assumenda delectus expedita ut accusamus eveniet
          minus excepturi molestiae ipsam, earum distinctio labore quod
          aspernatur numquam? Rem veniam explicabo enim itaque architecto
          debitis, nihil est modi excepturi, amet vitae voluptatum, harum
          officiis dolor quibusdam a magnam libero tempore natus quis sapiente
          impedit numquam ad optio. Eaque nesciunt officiis unde in ducimus.
          Quasi nihil nesciunt minima maxime facilis soluta ab, eveniet autem a
          sed ut inventore sapiente. A nihil recusandae voluptatem vitae
          doloribus quisquam? Sequi beatae saepe facere reiciendis qui dolores
          laboriosam, perferendis in autem, fugit praesentium cum officiis quas,
          animi aliquam repudiandae nesciunt facilis atque illo. Totam, quia est
          aliquam, esse tempora at alias culpa impedit explicabo perspiciatis id
          in a optio laborum quas reprehenderit laboriosam dolorem rem dolor
          commodi neque fugiat error sed. Quis animi illum ipsum voluptatum
          provident tempore asperiores dolorem ut inventore similique qui quas
          dolor vero debitis exercitationem, eos atque ab accusantium commodi
          laborum distinctio corporis fugiat? Fuga, totam dolorum temporibus
          doloribus quam eaque nobis aliquam reiciendis ad suscipit sapiente id
          sunt eum officiis. A assumenda ullam beatae odit explicabo distinctio
          corrupti, perspiciatis labore incidunt amet autem eveniet impedit
          recusandae? Quia quo nobis molestias excepturi necessitatibus adipisci
          soluta harum, dolor maiores tempore minima ex fuga deleniti
          exercitationem, iste omnis autem vitae earum. Praesentium itaque minus
          facere aspernatur temporibus repellat architecto quod soluta omnis
          tempora voluptatum quaerat, aperiam, sapiente cumque saepe quam atque
          ipsam error reprehenderit. Animi non ea sunt possimus voluptatem fugit
          nulla quisquam ab ut laudantium dicta soluta quam, fugiat consectetur
          quasi corrupti. Ipsa facilis tenetur ex aliquam praesentium expedita
          iste possimus a vel ullam nisi excepturi, ad nam soluta natus corrupti
          quia. Atque officiis soluta illum, sint exercitationem veniam
          expedita, veritatis vel pariatur ullam repudiandae modi aspernatur
          magni. Consequuntur, distinctio repellendus. Delectus, culpa
          inventore! Quisquam officiis commodi iusto provident veniam esse
          minima, recusandae qui hic quam maxime similique voluptas voluptate
          cumque? Officia rem, eveniet aut eius nisi a impedit, ipsa beatae
          optio accusantium quibusdam exercitationem minus iusto quaerat numquam
          repudiandae veniam perspiciatis et pariatur possimus quis autem modi?
          Dolore fugiat ad debitis neque sed dolorum eaque repellendus,
          asperiores culpa cum obcaecati suscipit unde exercitationem eius id
          quidem, in dolores reprehenderit. Sit ratione cumque, repellat quam
          voluptate doloremque dolorum minima molestias at facere obcaecati
          excepturi! Libero quo ab eaque blanditiis vitae sequi placeat impedit,
          temporibus quidem id dicta, doloremque facere eius, deleniti aliquid
          harum enim esse aut reprehenderit aspernatur recusandae est corporis!
          Quisquam aut debitis minima nostrum harum ab deserunt quos blanditiis
          cum eveniet temporibus repellat ullam, consequuntur asperiores odit
          iste beatae. Doloribus, repudiandae sit libero eveniet soluta omnis
          dicta delectus quisquam, dolores rerum eos eligendi ullam. Distinctio
          recusandae quisquam atque, voluptate veniam voluptas accusamus eveniet
          aliquam nostrum aut facilis, repudiandae tempore ut aspernatur a
          reprehenderit illo nesciunt minus, esse ipsum quis dolorem adipisci
          nulla cum. Et fugiat vitae incidunt rerum labore iste alias magnam
          doloremque repellendus architecto quaerat aperiam voluptatum eos
          tenetur atque pariatur voluptatibus, laboriosam esse. Facilis eum cum,
          ipsa molestias pariatur quidem beatae saepe iste reiciendis sed,
          distinctio rem commodi odit nam magnam cupiditate! Eum maiores natus
          dolores pariatur saepe modi quos ratione est! Impedit, velit in sed,
          odit aperiam laudantium consectetur amet qui officia dignissimos,
          pariatur expedita ex? Nemo reiciendis sapiente eligendi! Impedit
          voluptates neque possimus reiciendis deserunt quidem odio eos minus
          nobis? Voluptate nostrum nisi unde perferendis voluptatum vero veniam
          nihil aliquid sit officia quos temporibus recusandae iusto dignissimos
          quis ab, expedita quod quibusdam eveniet necessitatibus optio. Officia
          modi optio non adipisci incidunt aliquam fugiat dolorem, temporibus
          facere, soluta rem eum. Necessitatibus eius accusamus quibusdam amet
          reprehenderit explicabo nisi voluptatem at repellat. Quod nihil
          asperiores a nesciunt beatae dolorem accusamus veritatis! Cumque
          quibusdam ea maiores quidem rem delectus facilis sapiente. Odit
          reiciendis dolorem hic nulla modi rem, odio dolore velit debitis ab at
          nihil quis fuga fugit ut eum voluptatem magni blanditiis nesciunt nemo
          aperiam. Iusto dignissimos veniam nihil, iure nemo adipisci corporis
          labore possimus laboriosam, culpa aliquid eaque vero voluptatem earum
          reprehenderit rerum veritatis! Consequuntur, repudiandae dolorum. Rem,
          nisi maxime expedita aspernatur cupiditate voluptate velit dolorum
          officia accusamus molestias ullam consequatur voluptates voluptatem
          autem aut ad rerum sit, doloremque similique dolor iure nostrum sunt.
          Reprehenderit autem, deleniti nemo temporibus quibusdam veniam! Sint,
          perspiciatis!
        </Text>
      </ScrollView>
    </View>
  );
}
