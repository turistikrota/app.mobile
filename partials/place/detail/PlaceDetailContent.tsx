import { ScrollView, StatusBar, Text, View } from "@gluestack-ui/themed";
import React, { useRef, useState } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
} from "react-native";
import ScrollHeader from "~components/ScrollHeader";
import { PlaceImage } from "~types/place";
import { imageSort } from "~utils/sort";
import PlaceImageCarousel from "../card/PlaceImageCarousel";

type Props = {
  onShare: () => Promise<any>;
  onBack: () => void;
  title: string;
  images?: PlaceImage[];
};

const PlaceDetailContent: React.FC<Props> = ({
  title,
  images,
  onShare,
  onBack,
}) => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [statusBarIsLight, setStatusBarIsLight] = useState(true);
  const [shareLoading, setShareLoading] = useState(false);

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

  const onDetailShare = () => {
    setShareLoading(true);
    onShare().finally(() => {
      setShareLoading(false);
    });
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
      <ScrollHeader
        animHeaderValue={scrollOffsetY}
        title={title}
        leftIcon="arrow-back"
        leftPress={onBack}
        rightIcon="export"
        rightLoading={shareLoading}
        rightPress={onDetailShare}
      >
        {images && (
          <PlaceImageCarousel
            list={imageSort(images)}
            title={title}
            calcWidth={(w) => w}
            calcHeight={(w) => w}
          />
        )}
      </ScrollHeader>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={onScroll}
        style={{
          height: "100%",
        }}
      >
        <TouchableOpacity>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            laboriosam ullam harum corporis esse reiciendis molestiae
            perspiciatis. Molestias laborum, omnis expedita maxime possimus
            voluptatum commodi autem ipsa id suscipit minus tenetur magnam atque
            vitae? Odit cum nostrum molestias laboriosam, sit odio ad quo aut
            itaque quibusdam pariatur sapiente incidunt voluptate non quos,
            exercitationem cupiditate aspernatur ratione architecto delectus
            deleniti consequuntur obcaecati? Illum, nihil ducimus eum iste
            tempora aspernatur iure. Doloremque quo impedit, asperiores
            dignissimos est ex sit eum animi tempore ipsum excepturi fuga
            quibusdam voluptates! Officiis ut quos quibusdam iure perspiciatis?
            Mollitia, dicta quia ut perspiciatis, quaerat beatae tempora quo vel
            facilis libero eum voluptate. Alias, neque! Delectus commodi atque
            placeat optio magni molestias, minima sed libero tempora, similique
            iure nostrum! Dolore porro natus quaerat, molestiae magnam
            recusandae ex incidunt laborum quae fugiat harum vel saepe hic, sit
            fugit, placeat excepturi deleniti labore eligendi enim rem ipsa
            blanditiis. Alias doloremque, sunt eum nam dolor possimus, illum,
            est excepturi temporibus eligendi assumenda neque cum debitis. Quae
            repellendus ducimus odit sequi incidunt voluptatum tempora omnis
            beatae, ut aperiam magnam porro deserunt! Neque fugiat repudiandae
            accusantium blanditiis obcaecati aliquid voluptatem quidem hic.
            Adipisci minima optio labore, sint perferendis quam doloribus
            accusantium sed beatae. Corporis ratione sint pariatur impedit
            veritatis perspiciatis delectus voluptas maxime, nulla molestias
            saepe doloremque, similique nesciunt dicta quo. Dolorum enim minima
            odit eaque iste voluptatem consequuntur perspiciatis tempore dolor.
            Nesciunt ut reiciendis ipsam? Ullam tenetur numquam odit ratione
            voluptas quam at eveniet cumque modi adipisci officiis expedita,
            distinctio suscipit corrupti, asperiores odio dolores pariatur illo
            ipsa nostrum earum, reiciendis consequuntur? Non saepe unde quidem
            dignissimos voluptate explicabo perferendis enim aperiam!
            Consectetur dolore doloribus esse labore deserunt itaque sed debitis
            qui id blanditiis ut, quod delectus, quaerat aliquid distinctio
            eaque omnis dolorem fuga aspernatur dolorum modi expedita? Nisi
            architecto voluptas non quidem, corrupti voluptates. Earum, saepe
            pariatur. Atque culpa consectetur perspiciatis porro consequatur
            animi molestias voluptatem eius. Similique aliquam animi voluptatem
            nisi perspiciatis reprehenderit nostrum delectus accusamus ipsum
            neque! Praesentium inventore voluptates voluptatem, unde ab
            necessitatibus optio ratione ad, deserunt quis enim earum eligendi
            hic magni sit rerum velit aut quas repellendus quo mollitia. Minima
            possimus molestias modi id in repudiandae ducimus, ipsum qui
            necessitatibus sed nesciunt placeat optio odio nostrum dolorem
            pariatur commodi. Quas inventore repellendus dicta neque animi sint
            ullam nisi nostrum, ipsa excepturi totam? Ipsam obcaecati magni quae
            ea tempore vitae. Quos enim laborum nam corporis accusamus nobis
            exercitationem, natus quia mollitia doloribus! Earum libero sit,
            temporibus nisi officiis, non, tenetur autem velit vel cupiditate
            vitae a. Recusandae officia amet, adipisci odio saepe non vitae
            ullam voluptatum, magnam debitis, accusantium minus. Recusandae
            adipisci neque officia modi, hic ratione blanditiis quis magnam,
            voluptas odit qui natus ipsam quisquam commodi dolores dolor maxime.
            Itaque ipsum esse nisi quibusdam quos voluptas ab totam! Maiores
            debitis quis ducimus adipisci cupiditate voluptates non enim
            voluptas, earum consequatur in aspernatur labore at quibusdam. Ad
            aliquid officia quisquam, fugiat vel nihil veniam! Totam distinctio
            quas possimus eius ipsam nam vitae voluptatibus quia numquam. Beatae
            aspernatur veniam, expedita perferendis a molestiae sequi, totam
            doloribus voluptates itaque ad fugit excepturi quaerat? Ex quis
            dolorem vitae sequi earum vero pariatur aliquam qui laboriosam esse,
            sint ratione illum sunt ut culpa dolores accusantium, explicabo
            rerum adipisci? Impedit quasi harum tempora! Nostrum reprehenderit,
            expedita unde natus quis deleniti quaerat pariatur saepe eveniet
            nulla. Esse laboriosam ut commodi. Repudiandae, aperiam! Minus
            suscipit quo harum ad unde, voluptate ut explicabo veniam, vero
            reiciendis eaque? Quaerat saepe iusto in. Cumque eos dicta, nostrum
            ducimus nobis odio modi et reprehenderit consectetur ratione est sit
            facilis totam! Autem a, recusandae officia corrupti assumenda eius
            aut. Facilis optio eius repellat ipsum iusto sit at distinctio.
            Iusto sit incidunt temporibus? Voluptatibus id blanditiis debitis
            exercitationem nobis soluta repudiandae quisquam nostrum cupiditate,
            quas, totam fuga eos amet odit voluptatem dolore minima sed aliquid.
            Distinctio in eaque accusantium veritatis ab voluptatibus! Corrupti
            nisi excepturi ullam voluptas deserunt, facilis veniam vero dolor
            velit ducimus molestiae consequatur sequi aut quia. Doloremque
            deserunt voluptates iste molestias natus modi vel, quis ad eum
            consequatur dolore. Quos voluptas ex magni tempora architecto fuga
            maxime dolorum? Dicta iure suscipit pariatur aspernatur officia
            optio fugit, ratione est quidem ipsum necessitatibus maxime aperiam
            dolores, quisquam voluptas doloremque vel consectetur dolorem
            voluptate temporibus sit voluptates reprehenderit? Deleniti commodi,
            debitis ad ipsum at facilis ipsa necessitatibus ex porro nulla
            excepturi doloremque quas repudiandae sapiente quae cum pariatur
            ipsam, cupiditate soluta quaerat ratione facere nihil! Voluptas
            nostrum eos numquam, molestiae voluptates excepturi amet enim hic.
            Exercitationem nam labore, praesentium minima debitis aliquid. Illum
            quos similique quibusdam dolores ex veniam repellat explicabo minima
            doloribus nemo eius praesentium neque aliquam consequuntur
            aspernatur magnam et, placeat dignissimos maxime doloremque
            voluptatem optio? Odio laboriosam consectetur laudantium quidem nemo
            nam, repellat modi facilis saepe, nobis, vel laborum magni ullam
            illo cupiditate alias. Nemo delectus magnam facilis fuga accusantium
            magni velit incidunt necessitatibus repellat, pariatur eos eaque
            natus dignissimos debitis possimus suscipit dicta exercitationem
            odio eum. Atque delectus possimus illo aut neque, distinctio iusto
            obcaecati quam minima a cumque rem temporibus dolore consequuntur
            quisquam vel at corporis sint quaerat dolorem cum quas iure debitis
            labore. Pariatur, provident rerum? Doloribus, perferendis beatae,
            assumenda corporis non consequuntur dolorem esse voluptas alias
            exercitationem quisquam, molestias sapiente eligendi voluptate earum
            facilis blanditiis quaerat. Animi, dolorem adipisci blanditiis
            cumque sit sunt ea voluptatibus consequatur! Culpa laborum sapiente
            optio officia dolore obcaecati nisi iure. Dolorum neque commodi vel
            quod placeat unde velit ad error. Similique iusto porro accusamus
            dolorum, nemo reiciendis, minima earum enim quisquam qui odit vero
            voluptate, exercitationem commodi? Ipsa laborum voluptates modi
            dolorum! Dolores, tempora ducimus nemo sit dicta commodi sequi
            dolorum? Commodi, qui? Maiores quia eaque nisi, natus dolor iusto
            aperiam obcaecati eos ab, eum, magni recusandae? Beatae nobis
            cupiditate doloribus, qui sed expedita quasi quibusdam officia.
            Nobis modi delectus quas doloremque atque aliquid laboriosam aperiam
            perspiciatis excepturi voluptatem magni sed ad necessitatibus
            dignissimos veniam, assumenda dolorum accusamus magnam. Explicabo,
            doloribus. Laborum aut ipsum veritatis ex architecto maxime voluptas
            veniam sapiente magni saepe? Labore sit officia quod natus?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PlaceDetailContent;
