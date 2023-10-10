export type AgreementDetail = {
  title: string;
  content: string;
};

export type AgreementLocaleContent = {
  tr: AgreementDetail;
  en: AgreementDetail;
};

export type Agreements = {
  privacyAndPersonalData: AgreementLocaleContent;
  privacyNote: AgreementLocaleContent;
  termsOfUse: AgreementLocaleContent;
};

export const agreements: Agreements = {
  privacyAndPersonalData: {
    tr: {
      title: "Kişisel Verilerin Korunması ve Gizlilik Politikası",
      content: `<h2 id="web-sitesi-gizlilik-sözleşmesi">Web Sitesi Gizlilik Sözleşmesi</h2>
      <p>turistikrota.com&#39;u ziyaret etmeniz ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmanız sırasında size ve talep ettiğiniz hizmetlere ilişkin olarak elde ettiğimiz bilgilerin ne şekilde kullanılacağı ve korunacağı işbu &quot;Gizlilik Politikası&quot;nda belirtilen şartlara tabidir. Bu web sitesini ziyaret etmekle ve bu site vasıtasıyla hizmetlerimizden yararlanmakla işbu Gizlilik Politikası&#39;nı okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.</p>
      <h2 id="i-kişisel-verilerin-korunması-ve-işlenmesi-politikasının-amacı">I. Kişisel verilerin korunması ve işlenmesi politikasının amacı</h2>
      <p>turistikrota.com olarak, kişisel verilerinizi, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat kapsamında, aşağıda açıklanan kapsamda ve KVKK’da belirtilen kişisel veri işleme şartlarına uygun olarak işlemekteyiz. Bu kapsamda, kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek istiyoruz.</p>
      <p>Kişisel verilerin korunması ve güvenli bir platform sağlamak turistikrota.com&#39;un en önemli önceliğidir. Bu kapsamda, kişisel verilerinizin işlenmesine ilişkin olarak KVKK’da belirtilen kişisel veri işleme şartlarına uygun olarak işlemekteyiz. Bu kapsamda, kişisel verilerinizin işlenmesine ilişkin olarak KVKK’da belirtilen kişisel veri işleme şartlarına uygun olarak işlemekteyiz. Kişisel Verilerin Korunması Kanunu&#39;nun getirdiği tüm yükümlülükleri yerine getirmek için gerekli tüm teknik ve idari tedbirleri almaktayız.</p>
      <h2 id="ii-kişisel-verilerin-korunması-ve-işlenmesi-politikasının-kapsamı">II. Kişisel verilerin korunması ve işlenmesi politikasının kapsamı</h2>
      <p>turistikrota.com tarafından hazırlanan bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu&#39;na (&quot;KVKK&quot;) uygun olarak hazırlanmıştır. Kanun, bugün itibariyle bütün hükümleri ile yürürlüğe girmiştir. Kendi rızanız ile veya Kanunda sayılan diğer hukuka uygunluk gereği elde edilmiş veriler, sizlere daha iyi hizmet verebilmek, hizmet kalitemizi arttırabilmek ve sizlere özel hizmetler sunabilmek amacıyla kullanılacaktır. turistikrota.com olarak bazı verileri anonimleştirerek istatiki veri olarak kullanabiliriz. Bu veriler, tamamen kişisel verilerden arınmıştır ve hiçbir şekilde üçüncü kişilerle paylaşmayacağız. Bunların tamamı turistikrota.com&#39;un kendi bünyesinde kalacak ve turistikrota.com&#39;un gelişimi için kullanılacaktır.</p>
      <h2 id="iii-kişisel-verilerin-korunması-ve-işlenmesi-politikasının-değiştirilmesi">III. Kişisel verilerin korunması ve işlenmesi politikasının değiştirilmesi</h2>
      <p>turistikrota.com, politikamızı ve yönetmeliğimizi Kanuna uygun olarak değiştirme hakkını saklı tutar. Bu nedenle, politikamızı ve yönetmeliğimizi düzenli olarak kontrol etmenizi öneririz. Politikamızı ve yönetmeliğimizi değiştirirsek, değişiklikler web sitemizde yayınlanacak ve değişiklikler yürürlüğe girmeden önce size e-posta ile bildirilecektir.</p>
      <h2 id="iv-kişisel-verilerin-korunması-ve-işlenmesi-ile-ilgili-temel-kurallar">IV. Kişisel verilerin korunması ve işlenmesi ile ilgili temel kurallar</h2>
      <p>a) Hukuka ve dürüstlük kurallarına uygun olma: turistikrota.com verilerinizi, hukuka ve dürüstlük kurallarına uygun olarak toplayacak, kullanacak ve işleyecektir. turistikrota.com sadece gerekli durumlarda resmi makamların sağladığı hizmetler aracılığıyla veri doğrulaması yapmakta olup başka herhangi bir dış kaynaktan veri toplamamaktadır.</p>
      <p>b) Doğru ve gerektiğinde güncel olma: turistikrota.com, elindeki tüm verilerin doğru bilgi olmasına, yanlış bilgi içermemesine ve nihayet kişisel verilerde değişiklik olduğu takdirde bunları kendisine iletildiği takdirde güncellemeye önem verir.</p>
      <p>c) Belirli, açık ve meşru amaçlar için işlenme: turistikrota.com yalnızca sunmuş olduğu hizmetlerin gerektirdiği bilgileri toplar ve işler. turistikrota.com, kişisel verilerinizi, yalnızca belirli, açık ve meşru amaçlar için işleyecektir. turistikrota.com herhangi bir şekilde verilerinizi başka bir amaç için kullanmayacak veya kullandırtmayacaktır.</p>
      <p>d) İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma: turistikrota.com, kişisel verilerinizi, işlendikleri amaçla bağlantılı, sınırlı ve ölçülü olarak işleyecektir.</p>
      <p>e) İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme: turistikrota.com, kişisel verilerinizi, ilgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edecektir. Zaman aşımına uğrayan veriler, otomatik olarak sistemden silinecek ya da anonimleştirilecektir.</p>
      <p>turistikrota.com, kanuna uygun veya açık rıza ile topladığı kişisel verileri, yukarıda belirtilen amaçlar doğrultusunda, KVKK ve ilgili mevzuat hükümlerine uygun olarak işleyecektir.</p>
      <h3 id="kişisel-verilerin-korunması-ve-işlenmesi-ile-ilgili-haklarınız">Kişisel verilerin korunması ve işlenmesi ile ilgili haklarınız</h3>
      <p>Kişisel Verileri Koruma Kanunu’nun 11. maddesi uyarınca, kişisel veri sahipleri olarak, aşağıda belirtilen haklara sahipsiniz:</p>
      <p>a) Kişisel veri işlenip işlenmediğini öğrenme,</p>
      <p>b) Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</p>
      <p>c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</p>
      <p>ç) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</p>
      <p>d) Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</p>
      <p>e) KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</p>
      <p>f) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</p>
      <p>g) İşlenen verilerin münhasıran otmatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</p>
      <p>ğ) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</p>
      <p>haklarına sahipsiniz. turistikrota.com, kişisel veri sahiplerinin yukarıda belirtilen haklarını kullanması için gerekli olan ortamı sağlamaktadır.</p>
      <h3 id="azami-tasarruf-i̇lkesi--cimrilik-i̇lkesi">Azami Tasarruf İlkesi / Cimrilik İlkesi</h3>
      <p>Azami tasarruf ilkesi ya da cimrilik ilkesi adı verilen bu ilkemize göre turistikrota.com&#39;a ulaşan veriler, ancak gerekli olduğu kadarıyla sisteme işlenecektir. Bu nedenle hangi verileri toplayacağımız amaca göre belirlenir. Gerekli olmayan veriler toplanmaz veya anonimleştirilir. Bu sayede veri sahiplerinin gizliliği korunur. Özel nitelikli verilerden sağlık verileri sadece müşterilere daha iyi hizmet vermek ve onların sağlığını korumak amacıyla alınır, yine aynı amaçla sınırlı olmak üzere müşterinin tercih ettiği hizmetin türüne göre yurt içi veya yurt dışında mukim otel veya ilgili kuruluşlara aktarılır. Bu verilerin işlenmesi için müşterilerden açık rıza alınır.</p>
      <h3 id="kişisel-verilerin-silinmesi">Kişisel verilerin silinmesi</h3>
      <p>Kanunen saklnaması gereken sürelerin dolması, yargı süreçlerinin tamamlanması ya da diğer gereklilikler ortadan kalktığında turistikrota.com tarafından bu veriler kendiliğinden ya da ilgili kişinin talebi üzerine silinr, yok edilir ya da anonim hale getirilir.</p>
      <h3 id="doğruluk-ve-veri-güncelliği">Doğruluk ve veri güncelliği</h3>
      <p>turistikrota.com bünyesinde yer alan tüm veriler, kural olarak ilgili kişilerin beyanı üzerine bu beyanda belirtildiği şekliyle işlenir. turistikrota.com müşteriler ya da turistikrota.com&#39;a temas kuran kişilerin beyan ettiği verilerin doğruluğunu araştırmak zorunda olmadığı gibi bu hukuken ve çalışma ilkelerimiz nedeniyle de yapılmamaktadır. Beyan edilen veriler, doğru kabul edilir. Kişisel verilerin doğruluğu ve güncelliği ilkesi turistikrota.com tarafından da benimsenmiştir. turistikrota.com kendisine ulaşan resmi belgelerden veya ilgilisinin talebi üzerine işlemiş olduğu kişisel verileri günceller. Bunun için gerekli önlemleri alır.</p>
      <h3 id="gizlilik-ve-veri-güvenliği">Gizlilik ve veri güvenliği</h3>
      <p>Kişisel veriler gizlidir ve turistikrota.com bu gizliliğe riayet etmektedir. Kişisel verilere ancak yetki vermiş kişiler ulaşabilir. turistikrota.com tarafından toplanan kişisel verilerin korunması ve yetkisiz kişilerin eline geçmemesi ve müşterilerimizin ve müşteri adaylarımızın mağdur olmaması için gerekli teknik ve idari bütün tedbirler alınmaktadır. Bu çerçevede yazılımların standartlara uygun olması, üçüncü partilerin özenle seçilmesi ve şirket içinde de veri koruma politikasına riayet edilmesi sağlanmaktadır.</p>
      <h2 id="v-veri-işleme-amaçları">V. Veri işleme amaçları</h2>
      <p>turistikrota.com&#39;un kişisel verileri toplanması ve işlenmesi aydınlatma metninde belirtilen amaçlar doğrultusunda icra edilecektir. Veriler, sözleşmenin kurulması ve müşterilere daha iyi hizmet sağlanması amacıyla toplanmakta ve işlenmektedir.</p>
      <h2 id="vi-müşteri-muhtemel-müşteri-ve-iş-ve-çözüm-ortakları-verisi">VI. Müşteri, muhtemel müşteri ve iş ve çözüm ortakları verisi</h2>
      <h3 id="sözleşme-ilişkisi-için-verinin-toplanması-ve-işlenmesi">Sözleşme ilişkisi için verinin toplanması ve işlenmesi</h3>
      <p>Müşterilerimiz ve muhtemel müşterilerimizle bir sözleşme ilişkisi kurulmuş ise, toplanmış olan kişisel veriler, müşteriden onay alınmaksızın kullanılabilir. Ancak bu kullanım, sözleşme amacı ve doğrultusunda gerçekleşir. Sözleşmenin daha iyi icrası ve hizmetin gereklilikleri ölçüsünde veriler kullanılır ve gerektiğinde müşterilerle irtibata geçilerek güncellenir. Buna karşın muhtemel müşterilerimizin bize kendileri tarafından bırakmış olduğu veriler, onlara sonrasında daha kolay ve kaliteli hizmet sunmak için işlenir. Bu veriler talepleri halinde bir sözleşme ilişkisine dönüşmemişse silinir ya da anonimleştirilir.</p>
      <h3 id="i̇ş-ve-çözüm-ortakları-verileri">İş ve çözüm ortakları verileri</h3>
      <p>turistikrota.com, gerek iş gerekse çözüm ortakları ile veri paylaşımı yaparken hukuka uygun davranmayı temel ilke edinir. İş ve çözüm ortakları ile veri gizliliği taahhüdü ile ve ancak hizmetin gerektirdiği ölçüde veri paylaşılmakta ve bu taraflardan mutlaka veri güvenliğinin alınmasına ilişkin tedbirleri almaya zorlanmaktadır.</p>
      <h3 id="reklam-amaçlı-veri-işleme">Reklam amaçlı veri işleme</h3>
      <p>E-Ticaretin Düzenlenmesi Hk. Kanun ile Ticari İletişim ve Ticari Elektronik İletiler Hk. Yönetmeliğe uygun olarak ancak önceden onay alınan kişilere reklam amaçlı elektronik ileti gönderilebilir. Reklamın gönderileceği kişinin onayının açık bir şekilde mevcudiyeti şarttır. Yine aynı mevzuat uyarınca belirlenen &quot;onay&quot;ın detaylarına turistikrota.com riayet etmektedir. Elektronik ileti gönderilebilmesi için kişisel veriler hizmet sağlayıcılara ve Ticari Elektronik İletiler Hk. Yönetmelik gereği ileti Yönetim Sistemi A.Ş.&#39;ye aktarılmaktadır.</p>
      <h3 id="şirketin-hukuki-yükümlülüğü-veya-kanunda-açıkça-öngörülmesi-sebebiyle-yapılan-veri-işlemleri">Şirketin hukuki yükümlülüğü veya kanunda açıkça öngörülmesi sebebiyle yapılan veri işlemleri</h3>
      <p>Kişisel veriler, işlemenin ilgili mevzuatta açıkça belirtilmesi veya mevzuatla belirlenen bir hukuki yükümlülüğün yerine getirilmesi amacıyla ayrıca onay alınmadan işlenebilir. Veri işlemlerinin tür ve kapsamı, yasal olarak izin verilen veri işleme faaliyeti için gerekli olmalı ve ilgili yasal hükümlere uygun olmalıdır.</p>
      <h3 id="şirketin-veri-işlemesi">Şirketin veri işlemesi</h3>
      <p>Şirketin sunduğu hizmet ve meşru amaçları doğrultusunda kişisel veriler işlenebilir. Ancak veriler hiçbir şekilde hukuka aykırı hizmetler için kullanılamaz.</p>
      <h3 id="özel-nitelikli-verilerin-işlenmesi">Özel nitelikli verilerin işlenmesi</h3>
      <p>Kanun&#39;a göre Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkumiyeti ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri özel nitelikli kişisel veridir. turistikrota.com ayrıca, özel nitelikli kişisel verilerin işlenmesinde, ayrıca Kurul tarafından belirlenen yeterli önlemleri alır.</p>
      <p>turistikrota.com, hizmetlerin daha iyi verilebilmesi için kişilerin onayı ile özel nitelikli verileri ancak toplandıkları amaç için işleyebilir. Aracılığımızla rezervasyon yaptırdığınız tesis, Covid-19 kapsamında çıkan veya daha sonra benzer şartlarla çıkabileeck genelge ve yasal düzenlemeler gereği misafirlerden, kendilerine ve yakınlarına ait sağlık verileri gibi özel nitelikli kişisel veriler de dahil olmak üzere bazı kişisel veriler talep edebilir. Bu kişisel veriler, gerektiğinde resmi merciler ve sağlık kuruluşları ile paylaşılabilir.</p>
      <h3 id="üyelik-işlemleri-yolu-ile-elde-edilen-veriler">Üyelik işlemleri yolu ile elde edilen veriler</h3>
      <p>turistikrota.com&#39;a üye olmanız durumunda, üyelik işlemi için bizimle paylaştığınız kişisel verileriniz sistemlerimizde işlenir. Şayet bizim sistemimize Facebook, Google, Apple ya da başka bir sosyal platform araçları ile üye olursanız; adınız, soyadınız, profil resminiz ve e-posta adresiniz gibi, ilgili sosyal platform aracının partnerlerine sağladığı bilgilerinize erişilmekte ve bu bilgiler turistikrota.com sistemlerine aktarılmaktadır.</p>
      <h3 id="otomatik-sistemlerle-işlenen-veriler">Otomatik sistemlerle işlenen veriler</h3>
      <p>Otomatik sistemler aracılığı ile işlenen veriler konusunda turistikrota.com, Kanuna uygun davranır. Kişilerin açık rızası olmaksızın bu verilerden elde edilen bilgiler kişi aleyhine kullanılamaz. Ancak turistikrota.com, kendi sistemindeki verileri kullanarak işlem yapacağı kişilerle ilgili kararlar alabilir.</p>
      <h3 id="çerez-politikası">Çerez politikası</h3>
      <p>turistikrota.com, birçok web sitesinde olduğu gibi web sitesi kullanıcılarının ziyaret deneyimlerini iyileştirmek, güvenliğini sağlamak ve hizmet kalitesini arttırmak amacıyla çerez vb. teknolojiler kullanmaktadır. turistikrota.com Çerez Politikası web sitesi kullanıcılarını çerezlere ve kullanılan çerez türlerine ilişkin olarak bilgilendirmek ve çerez tercihlerinin nasıl yönetilebileceği konularında yol göstermek amacıyla hazırlanmıştır.</p>
      <p>Çerez kullanımını onaylamıyorsanız web sitesine devam etmemenizi ya da çerez tercihlerinizi bu Politika&#39;da gösterildiği şekilde değiştirmenizi öneririz. Çerezlere izin verilmemesi halinde web sitesinin bazı özelliklerinin çalışmayabileceğini ve web sitesinin kullanımının kısıtlanabileceğini hatırlatmak isteriz.</p>
      <h3 id="çerez-nedir">Çerez nedir?</h3>
      <p>Çerez, bir web sitesini ziyaret ettiğinizde bilgisayarınızda ya da mobil cihazınızda depolanan küçük metin dosyalarıdır. Bu dosyalarda IP adresiniz, oturum bilgileriniz, eriştiğiniz sayfalar vb. veriler saklanır. Çerezler sayesinde web sitesi tercihleriniz hatırlanabilir, oturumunuzun açık tutulması sağlanabilir ya da size ilgilendiğiniz içerik sunulabilir. Çerezlere ilişkin detaylı bilgi için <a href="www.aboutcookies.org">about cookies</a> ve <a href="www.allaboutcookies.org">all about cookies</a> adreslerini ziyaret edebilirsiniz.</p>
      <h3 id="çerez-türleri">Çerez türleri</h3>
      <p>Çerezler mobil cihazlarda depolanma süreleri ve kimin tarafından yerleştirildikleri gibi kriterlere göre farklı türlere ayrılmaktadır. Bu kriterler kapsamında temel ayrım şu şekildedir:</p>
      <p><strong>Oturum Çerezleri:</strong> Oturum çerezleri, geçici çerezler olup tarayıcıyı kapattıktan sonra cihazdan silinirler. Bu çerezlerin ana işlevi web sitesinin düzgün bir şekilde çalışmasını sağlamaktır.</p>
      <p><strong>Kalıcı Çerezler:</strong> Kalıcı çerezler tarayıcıyı kapattıktan sonra da kullanıcı tarafından silininceye ya da süresi doluncaya dek cihazda kalmaya devam ederler.</p>
      <p><strong>Birinci Taraf Çerezler:</strong> Birinci taraf çerezler ziyaret edilen web sitesi operatörü tarafından cihaza yerleştirilen çerezlerdir.</p>
      <p><strong>Üçüncü Taraf Çerezler:</strong> Üçüncü taraf çerezler ziyaret edilen web sitesi operatörü dışındaki kişiler tarafından cihaza yerleştirilen ve kontrol edilen çerezlerdir.</p>
      <p>turistikrota.com&#39;a ait web siteleri ve diğer sistemlerde veya uygulamalarda kişisel verilerin toplanması, işlenmesi ve kullanılması durumunda ilgili kişiler gizlilik bildirimi ile ve gerekirse çerezler hakkında bilgilendirilir. Kişiler, web sayfalarındaki uygulamalarımız konusunda bilgilendirilir. Kişisel veriler, hukuka uygun olarak işlenecektir.</p>
      <h3 id="turistikrotacom-sistemlerinde-kullanılan-çerezler">turistikrota.com sistemlerinde kullanılan çerezler</h3>
      <p>turistikrota.com, Gizilik Politikası&#39;na uygun olarak farklı amaçlarla çeşitli çerezler kullanmaktadır. turistikrota.com sistemlerinde kullanılan çerezlerin türleri ve amaçları aşağıda açıklanmaktadır.</p>
      <p><strong>Zorunlu Çerezler:</strong> Web sitesinin doğru bir şekilde çalışmasını sağlayan ve özelliklerini kullanmanıza imkân veren teknik çerezlerdir. Oturum çerezi kategorisinde yer alırlar. Bu çerezlerin engellenmesi halinde web sitesi özelliklerinin kullanılamaması sonucu doğar. Zorunlu çerezlerin kullanımı için onayınız gerekmemektedir.</p>
      <p><strong>Analitik Çerezler:</strong> Web sitesi deneyiminizi iyileştirmek amacıyla analitik çerezler kullanılır. Analitik çerezler, web sitesi nasıl kullandığınızı (örn; hangi sayfaları ziyaret ettiğini, ziyaret süresini vb.) anlamamızı sağlar. Böylelikle sunduğumuz içerikleri geliştirebilir ya da web sitesi tasarımını değiştirebiliriz.</p>
      <p><strong>İşlevsellik Çerezleri:</strong> Web sitesini tekrar ziyaret ettiğinizde dil tercihlerinizin, bölge seçiminizin vb. hatırlanmasına olanak sağlar.</p>
      <p><strong>Hedefleme/Reklam Çerezleri:</strong> turistikrota web sitesinde hedefleme ve reklam amacıyla farklı birinci taraf ve üçüncü taraf çerezler kullanmaktadır. Bu çerezleri tarayıcınızın ayarlarını değiştirerek ya da bu Politika’da gösterildiği şekilde çerez tercihlerini değiştirerek engellemeniz mümkündür.</p>
      <h3 id="çerez-tercihlerinin-yönetilmesi">Çerez tercihlerinin yönetilmesi</h3>
      <p>Çerezleri kullandığınız tarayıcının ayarlarını değiştirerek kişiselleştirmeniz ya da tamamen engellemeniz mümkündür. Farklı tarayıcılar için izlenmesi gereken adımlara ilişkin detaylı bilgiye aşağıdaki linklerden ulaşabilirsiniz:</p>
      <table>
      <thead>
      <tr>
      <th>Tarayıcı</th>
      <th>Link</th>
      </tr>
      </thead>
      <tbody><tr>
      <td>Google Chrome</td>
      <td><a href="https://support.google.com/chrome/answer/95647?hl=tr">açmak için buraya tıklayınız</a></td>
      </tr>
      <tr>
      <td>Internet Explorer</td>
      <td><a href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies">açmak için buraya tıklayınız</a></td>
      </tr>
      <tr>
      <td>Mozilla Firefox</td>
      <td><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma">açmak için buraya tıklayınız</a></td>
      </tr>
      <tr>
      <td>Safari</td>
      <td><a href="https://support.apple.com/tr-tr/HT201265">açmak için buraya tıklayınız</a></td>
      </tr>
      <tr>
      <td>Microsoft Edge</td>
      <td><a href="https://privacy.microsoft.com/tr-tr/windows-10-microsoft-edge-and-privacy">açmak için buraya tıklayınız</a></td>
      </tr>
      <tr>
      <td>Opera</td>
      <td><a href="https://www.opera.com/help/tutorials/security/privacy/">açmak için buraya tıklayınız</a></td>
      </tr>
      <tr>
      <td>Yandex</td>
      <td><a href="https://yandex.com.tr/support/browser-classic/personal-data-protection/cookies.xml">açmak için buraya tıklayınız</a></td>
      </tr>
      </tbody></table>
      <p>Diğer tarayıcılarda çerez tercihlerini yönetmek için ilgili tarayıcının yardım veya destek sayfasını inceleyebilirsiniz.</p>
      <h3 id="kişisel-verilerin-yurt-içi-ve-yurt-dışı-aktarımı">Kişisel verilerin yurt içi ve yurt dışı aktarımı</h3>
      <p>Kişisel verileriniz, rezervasyonunuzun tamamlanabilmesi ve hizmetin tarafınıza sunulabilmesi için yurt dışında mukim otel, hava yolu, transfer hizmeti sağlayan tedarikçi firmalar ve ilgili yurt dışı acentesi ile paylaşılır. Seyahatinizin gerçekleşmesi için turistikrota.com ile anlaşması olmayan otellerde arama, rezervasyon ve konaklama yapabilmeniz amacıyla yurt içinde ve yurt dışında bulunan başka elektronik platformlarla da kişisel verileriniz paylaşılabilir. Kendi kuruluş kanunlarına göre özel hukuk tüzel kişilerinden bilgi ve belge talep etmeye yetkili resmi kuruluşların usulüne uygun talepleri üzerine kişisel veriler bu kurum ve kuruluşlarla paylaşılabilmektedir.</p>
      <p>Ayrıca turistikrota.com web sitesine girdiğinizde, karşınıza çıkan çerez aydınlatma metnini kabul ettiğiniz takdirde, müşteri deneyiminin iyileştirilmesi, turistikrota.com tarafından sunulan ürün ve hizmetlerden müşterilerin ve ziyaretçilerin daha iyi yararlandırılması, müşteri/ziyaretçilerin ihtiyaçları, beğenileri ve kullanım alışkanlıklarına göre özellikleştirilerek sunumu ve önerilmesi, turistikrota.com&#39;a ait stratejilerin belirlenmesi amaçlarıyla yurt dışında bulunan platform ve uygulamalara verilerek aktarılabilmektedir.</p>
      <h2 id="vii-gizlilik-i̇lkesi">VII. Gizlilik İlkesi</h2>
      <p>İster çalışanlar isterse diğer kişilerin turistikrota.com&#39;daki verileri gizlidir. Hiç kimse sözleşme ya da kanuna uygunluk olmaksızın başkaca hiçbir amaç için bu verileri kullanamaz, kopyalayamaz, çoğaltamaz, başkalarına aktaramaz, iş amaçları dışında kullanamaz.</p>
      <h2 id="viii-i̇şlem-güvenliği">VIII. İşlem Güvenliği</h2>
      <p>turistikrota.com tarafından toplanan kişisel verilerin korunması ve yetkisiz kişilerin eline geçmemesi ve müşterilerimizin ve müşteri adaylarımızın mağdur olmaması için gerekli teknik ve idari bütün tedbirler alınmaktadır. Bu çerçevede yazılımların standartlara uygun olması, üçüncü partilerin özenle seçilmesi ve şirket içinde de veri koruma politikasına riayet edilmesi sağlanmaktadır. Güvenliğe ilişkin önlemler, sürekli olarak yenilenmekte ve geliştirilmektedir.</p>
      <h3 id="kredi-kartı-ve-ödeme-bilgilerinin-korunması">Kredi Kartı ve Ödeme Bilgilerinin Korunması</h3>
      <p>Verdiğimiz hizmet dolayısıyla sizden alınan ödeme ve kredi kartı bilgileri, hizmet bedellerinin tahsil edileceği tarihe kadar, tarafımızca PCI DSS ((Payment Card Industry Data Security Standards) güvenlik standartları doğrultusunda hizmet veren üçüncü taraf bir servis sağlayıcıya iletilip şifrelenerek saklanır. PCI DSS adı altında oluşturulan güvenlik standartları; American Express, Discover, JCB International, Mastercard ve Visa Inc. firmaları gibi önde gelen ödeme kartı servis sağlayıcılarının bir araya gelerek oluşturdukları bir konsey tarafından güvenli ödeme çözümlerinin hayata geçirilmesini ve tacirlerin, hizmet sağlayıcılarının, finansal kurum ve kuruluşların kendi ödeme sitemlerini güvence altına almalarını, yaşanabilecek ihlalleri, kart bilgisi hırsızlıklarını önlemeleri maksadıyla yeni güvenlik politikalarını ve teknolojileri uygulamaya koymalarını sağlamak amacıyla oluşturulmuştur. turistikrota.com ile paylaşmış olduğunuz kredi kartı ve sair ödeme bilgileri, bahis olunan standartlar doğrultusunda Level 1 güvenlik sertifikasına sahip üçüncü taraf bir güvenlik hizmeti sağlayıcısına iletilerek, yukarıda belirtildiği gibi tedarikçilerce hizmet bedelleri tahsil edilene kadar saklanacaktır. Bu tarihten sonra da işlem güvenliğinin sağlanması maksadıyla bilgilerin saklanmasına belirli bir süre daha devam edilecektir.</p>
      <h2 id="ix-denetim">IX. Denetim</h2>
      <p>turistikrota.com, kişisel verilerin korunması konusunda gerekli iç ve dış denetimleri yaptırır.</p>
      <h2 id="x-i̇hlallerin-bildirimi">X. İhlallerin Bildirimi</h2>
      <p>turistikrota.com, kişisel verilerle ilgili herhangi bir ihlal olduğu kendisine bildirildiğinde söz konusu ihlali gidermek için derhal harekete geçer. İlgilinin zararını en aza indirir ve zararı telafi eder. Kişisel verilerin dışarıdan yetkisiz kimselerce ele geçirildiğinde durumu derhal Kişisel Verileri Koruma Kurulu’na bildirir.</p>
      <p>İhlallerin bildirimi ile ilgili <a href="https://turistikrota.com">turistikrota.com</a> adreslerinde belirtilen usullere göre de başvurular yapılabilir.</p>
      `,
    },
    en: {
      title: "Protection of Personal Data and Privacy Policy",
      content: `<h2 id="website-privacy-policy">Website Privacy Policy</h2>
      <p>How to use and protect the information we obtain about you and the services you request during your visit to Turistikrota and your use of the services we offer through this site are subject to the conditions set forth in this &quot;Privacy Policy&quot;. By visiting this website and using our services through this website, you declare that you have read, understood and accepted this Privacy Policy.</p>
      <h2 id="i-purpose-of-personal-data-protection-and-processing-policy">I. Purpose of personal data protection and processing policy</h2>
      <p>As Turistikrota, we process your personal data within the scope of the Personal Data Protection Law No. 6698 (“KVKK”) and the relevant legislation, within the scope described below and in accordance with the personal data processing conditions specified in the KVKK. In this context, we would like to inform you about the processing of your personal data.</p>
      <p>Protection of personal data and providing a secure platform is the top priority of Turistikrota. In this context, we process your personal data in accordance with the personal data processing conditions specified in the KVKK. In this context, we process your personal data in accordance with the personal data processing conditions specified in the KVKK. We take all necessary technical and administrative measures to fulfill all obligations imposed by the Personal Data Protection Law.</p>
      <h2 id="ii-scope-of-personal-data-protection-and-processing-policy">II. Scope of personal data protection and processing policy</h2>
      <p>This policy, prepared by Turistikrota, has been prepared in accordance with the Law on the Protection of Personal Data No. 6698 (&quot;KVKK&quot;). The law has entered into force with all its provisions as of today. The data obtained with your own consent or in accordance with other laws listed in the Law will be used in order to serve you better, to increase our service quality and to provide you with special services. As Turistikrota, we can anonymize some data and use it as statistical data. This data is completely free of personal data and we will never share it with third parties. All of these will remain within the body of Turistikrota and will be used for the development of Turistikrota.</p>
      <h2 id="iii-changing-the-personal-data-protection-and-processing-policy">III. Changing the personal data protection and processing policy</h2>
      <p>Turistikrota reserves the right to change our policy and regulation in accordance with the Law. Therefore, we recommend that you regularly check our policy and regulation. If we change our policy and regulation, the changes will be posted on our website and you will be notified by email before the changes take effect.</p>
      <h2 id="iv-basic-rules-on-the-protection-and-processing-of-personal-data">IV. Basic rules on the protection and processing of personal data</h2>
      <p>a) Compliance with the law and the rules of honesty: Turistikrota will collect, use and process your data in accordance with the law and the rules of honesty. Turistikrota only validates data through the services provided by official authorities when necessary and does not collect data from any other external source.</p>
      <p>b) Being accurate and up-to-date when necessary: Turistikrota attaches importance to the fact that all data in its possession are correct, not contain false information, and finally, if there is a change in personal data, they are updated if they are communicated to it.</p>
      <p>c) Processing for specific, clear and legitimate purposes: Turistikrota collects and processes only the information required by the services it provides. Turistikrota will only process your personal data for specific, explicit and legitimate purposes. Turistikrota will not use or make you use your data for any other purpose.</p>
      <p>d) Being connected, limited and measured for the purpose for which they are processed: Turistikrota will process your personal data in connection with the purpose for which they are processed, in a limited and measured manner.</p>
      <p>e) Retention for the period required by the relevant legislation or for the purpose for which they are processed: Turistikrota will retain your personal data for the period required by the relevant legislation or for the purpose for which they are processed. Expired data will be automatically deleted from the system or anonymized.</p>
      <p>Turistikrota will process the personal data it collects in accordance with the law or with explicit consent, in line with the above-mentioned purposes, in accordance with the provisions of the KVKK and relevant legislation.</p>
      <h3 id="your-rights-regarding-the-protection-and-processing-of-personal-data">Your rights regarding the protection and processing of personal data</h3>
      <p>Pursuant to Article 11 of the Personal Data Protection Law, as personal data owners, you have the following rights:</p>
      <p>a) Learning whether personal data is processed or not,</p>
      <p>b) If personal data has been processed, requesting information about it,</p>
      <p>c) Learning the purpose of processing personal data and whether they are used in accordance with its purpose,</p>
      <p>ç) To know the third parties to whom personal data is transferred in the country or abroad,</p>
      <p>d) Being connected, limited and measured for the purpose for which they are processed: Turistikrota will process your personal data in connection with the purpose for which they are processed, in a limited and measured manner.</p>
      <p>e) Retention for the period required by the relevant legislation or for the purpose for which they are processed: Turistikrota will retain your personal data for the period required by the relevant legislation or for the purpose for which they are processed. Expired data will be automatically deleted from the system or anonymized.</p>
      <p>Turistikrota will process the personal data it collects in accordance with the law or with explicit consent, in line with the above-mentioned purposes, in accordance with the provisions of the KVKK and relevant legislation.</p>
      <h3 id="your-rights-regarding-the-protection-and-processing-of-personal-data-1">Your rights regarding the protection and processing of personal data</h3>
      <p>Pursuant to Article 11 of the Personal Data Protection Law, as personal data owners, you have the following rights:</p>
      <p>a) Learning whether personal data is processed or not,</p>
      <p>b) If personal data has been processed, requesting information about it,</p>
      <p>c) Learning the purpose of processing personal data and whether they are used in accordance with its purpose,</p>
      <p>ç) To know the third parties to whom personal data is transferred in the country or abroad,</p>
      <p>d) Requesting correction of personal data in case of incomplete or incorrect processing and requesting notification of the transaction made within this scope to the third parties to whom the personal data has been transferred,</p>
      <p>e) Requesting the deletion or destruction of personal data within the framework of the conditions stipulated in Article 7 of the KVKK and requesting the notification of the transaction made in this context to the third parties to whom the personal data has been transferred,</p>
      <p>f) Objecting to the emergence of a result against the person himself by analyzing the processed data exclusively through automated systems,</p>
      <p>g) Objecting to the emergence of a result against the person himself by analyzing the processed data exclusively through automatic systems,</p>
      <p>ğ) To request the compensation of the damage in case of loss due to unlawful processing of personal data.</p>
      <p>you have the rights. Turistikrota provides the necessary environment for personal data owners to exercise their above-mentioned rights.</p>
      <h3 id="maximum-savings-policystinginess-policy">Maximum Savings Policy/Stinginess Policy</h3>
      <p>According to this policy, which is called the principle of maximum savings or the principle of stinginess, the data received by Turistikrota will be processed into the system only to the extent necessary. Therefore, what data we collect is determined by the purpose. Unnecessary data is not collected or anonymized. In this way, the privacy of data owners is protected. Health data from special quality data is collected only in order to provide better service to customers and to protect their health, and for the same purpose, it is transferred to hotels or related organizations residing in Turkey or abroad, depending on the type of service preferred by the customer. For the processing of this data, explicit consent is obtained from the customers.</p>
      <h3 id="deletion-of-personal-data">Deletion of personal data</h3>
      <p>These data are deleted, destroyed or anonymized by Turistikrota spontaneously or upon the request of the person concerned, when the periods that must be kept by law expire, the judicial processes are completed or other requirements are eliminated.</p>
      <h3 id="accuracy-and-data-freshness">Accuracy and data freshness</h3>
      <p>As a rule, all data contained in Turistikrota is processed as stated in this statement, upon the declaration of the relevant persons. Turistikrota is not obligated to investigate the accuracy of the data declared by customers or people contacting Turistikrota, and this is not done legally and due to our working principles. The declared data is considered correct. The principle of accuracy and timeliness of personal data has also been adopted by Turistikrota. Turistikrota updates the personal data it has processed from the official documents it receives or upon the request of the person concerned. It takes the necessary measures for this.</p>
      <h3 id="privacy-and-data-security">Privacy and data security</h3>
      <p>Personal data is confidential and Turistikrota respects this confidentiality. Only authorized persons can access personal data. All necessary technical and administrative measures are taken to protect the personal data collected by Turistota.com, to prevent it from falling into the hands of unauthorized persons and to prevent our customers and prospective customers from being victims. In this framework, it is ensured that the software complies with the standards, that the third parties are carefully selected and that the data protection policy is complied with within the company.</p>
      <h2 id="v-data-processing-purposes">V. Data processing purposes</h2>
      <p>Collection and processing of personal data of Turistikrota will be carried out in line with the purposes specified in the clarification text. Data is collected and processed for the purpose of establishing the contract and providing better service to customers.</p>
      <h2 id="vi-customer-prospective-customer-and-business-and-solution-partners-data">VI. Customer, prospective customer and business and solution partners data</h2>
      <h3 id="collection-and-processing-of-data-for-contractual-relationship">Collection and processing of data for contractual relationship</h3>
      <p>If a contractual relationship is established with our customers and prospective customers, the collected personal data can be used without the consent of the customer. However, this use takes place in accordance with the purpose and direction of the contract. The data is used to the extent of better execution of the contract and the requirements of the service and updated when necessary by contacting the customers. On the other hand, the data left by our prospective customers to us are processed in order to provide them with an easier and higher quality service afterwards. If this data does not turn into a contractual relationship upon request, it is deleted or anonymized.</p>
      <h3 id="business-and-partner-data">Business and partner data</h3>
      <p>Turistikrota adopts the principle of acting in accordance with the law when sharing data with both business and solution partners. Data is shared with business and solution partners with a commitment to data confidentiality and only to the extent required by the service, and these parties are compelled to take measures to ensure data security.</p>
      <h3 id="advertising-data-processing">Advertising data processing</h3>
      <p>About Regulation of E-Commerce About Commercial Communication and Commercial Electronic Messages by Law. In accordance with the regulation, electronic messages for advertising purposes can only be sent to people who have received prior approval. The explicit consent of the person to whom the advertisement is sent is essential. Touristrota.com complies with the details of the &quot;approval&quot; determined in accordance with the same legislation. In order to send electronic messages, personal data must be submitted to service providers and About Commercial Electronic Messages. In accordance with the regulation, the message is transferred to the Management System Inc.</p>
      <h3 id="data-transactions-made-due-to-the-legal-obligation-of-the-company-or-expressly-stipulated-in-the-law">Data transactions made due to the legal obligation of the company or expressly stipulated in the law</h3>
      <p>Personal data may be processed without obtaining separate approval for the purpose of expressly stating the processing in the relevant legislation or fulfilling a legal obligation determined by the legislation. The type and scope of data processing must be necessary for legally permitted data processing and must comply with relevant legal provisions.</p>
      <h3 id="data-processing-of-the-company">Data processing of the company</h3>
      <p>Personal data may be processed in line with the service offered by the company and its legitimate purposes. However, the data cannot be used for illegal services in any way.</p>
      <h3 id="processing-of-sensitive-data">Processing of sensitive data</h3>
      <p>According to the Law, data regarding the race, ethnic origin, political opinion, philosophical belief, religion, sect or other beliefs, disguise and dress, membership to associations, foundations or trade unions, health, sexual life, criminal convictions and security measures, and biometric and genetic data is personal data of special nature. Turistikrota also takes adequate measures determined by the Board in the processing of sensitive personal data.</p>
      <p>Turistikrota can only process sensitive data for the purpose for which they were collected, with the consent of the individuals, in order to provide better services. The facility that you have booked through us may request some personal data from the guests, including special quality personal data such as health data of themselves and their relatives, in accordance with the circular and legal regulations that may be issued under Covid-19 or may be released later with similar conditions. This personal data can be shared with official authorities and health institutions when necessary.</p>
      <h3 id="data-obtained-through-membership-transactions">Data obtained through membership transactions</h3>
      <p>If you are a member of Turistikrota, your personal data that you share with us for the membership process is processed in our systems. If you subscribe to our system with Facebook, Google, Apple or any other social platform tools; Your information, such as your name, surname, profile picture and e-mail address, provided by the relevant social platform tool to its partners, is accessed and this information is transferred to Turistikrota systems.</p>
      <h3 id="data-processed-by-automated-systems">Data processed by automated systems</h3>
      <p>With regard to the data processed through automatic systems, Turistikrota acts in accordance with the Law. The information obtained from these data cannot be used against the person without the explicit consent of the people. However, Turistikrota can make decisions about the people it will process using the data in its own system.</p>
      <h3 id="cookie-policy">Cookie policy</h3>
      <p>As with many websites, Turistikrota uses cookies, etc., in order to improve the visiting experience of website users, to ensure their security and to increase service quality. uses technologies. Turistikrota Cookie Policy has been prepared to inform website users about cookies and the types of cookies used, and to guide them on how to manage their cookie preferences.</p>
      <p>If you do not approve of the use of cookies, we recommend that you do not continue with the website or change your cookie preferences as shown in this Policy. We would like to remind you that if cookies are not allowed, some features of the website may not work and the use of the website may be restricted.</p>
      <h3 id="what-is-a-cookie">What is a cookie?</h3>
      <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. These files contain your IP address, login information, pages you access, etc. data is stored. Thanks to cookies, your website preferences can be remembered, your session can be kept open, or you can be presented with the content you are interested in. For detailed information about cookies, you can visit <a href="www.aboutcookies.org">aboutcookies</a> and <a href="www.allaboutcookies.org">allaboutcookies</a>.</p>
      <h3 id="types-of-cookies">Types of cookies</h3>
      <p>Cookies are divided into different types according to criteria such as their storage time on mobile devices and by whom they are placed. The basic distinction within the scope of these criteria is as follows:</p>
      <p><strong>Session Cookies:</strong> Session cookies are temporary cookies and are deleted from the device after closing the browser. The main function of these cookies is to ensure that the website functions properly.</p>
      <p><strong>Persistent Cookies:</strong> Persistent cookies remain on the device after closing the browser until they are deleted by the user or expire.</p>
      <p><strong>First Party Cookies:</strong> First party cookies are cookies placed on the device by the website operator visited.</p>
      <p><strong>Third Party Cookies:</strong> Third-party cookies are cookies placed and controlled by people other than the website operator visited.</p>
      <p>In case of collection, processing and use of personal data on the websites and other systems or applications belonging to Turistikrota, the relevant persons are informed about the privacy statement and, if necessary, about the cookies. People are informed about our practices on web pages. Personal data will be processed in accordance with the law.</p>
      <h3 id="cookies-used-in-turistikrota-systems">Cookies used in Turistikrota systems</h3>
      <p>Turistikrota uses various cookies for different purposes in accordance with its Privacy Policy. The types and purposes of cookies used in Turistikrota systems are explained below.</p>
      <p><strong>Mandatory Cookies:</strong> These are technical cookies that enable the website to function correctly and allow you to use its features. They are in the session cookie category. If these cookies are blocked, it will result in the inability to use the website features. Your consent is not required for the use of mandatory cookies.</p>
      <p><strong>Analytical Cookies:</strong> Analytical cookies are used to improve your website experience. Analytical cookies allow us to understand how you use the website (eg which pages you visit, duration of visit etc.). In this way, we can improve the content we offer or change the website design.</p>
      <p><strong>Functionality Cookies:</strong> When you visit the website again, your language preferences, region selection, etc. allows it to be remembered.</p>
      <p><strong>Targeting/Advertising Cookies:</strong> turistikrota uses different first-party and third-party cookies for targeting and advertising purposes on the website. It is possible to block these cookies by changing your browser settings or by changing your cookie preferences as shown in this Policy.</p>
      <h3 id="managing-cookie-preferences">Managing cookie preferences</h3>
      <p>It is possible to personalize or completely block cookies by changing the settings of the browser you use. You can find detailed information on the steps to be followed for different browsers from the links below:</p>
      <table>
      <thead>
      <tr>
      <th>Browser</th>
      <th>Link</th>
      </tr>
      </thead>
      <tbody><tr>
      <td>Google Chrome</td>
      <td><a href="https://support.google.com/chrome/answer/95647?hl=en">click to go</a></td>
      </tr>
      <tr>
      <td>Internet Explorer</td>
      <td><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">click to go</a></td>
      </tr>
      <tr>
      <td>Mozilla Firefox</td>
      <td><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sites-information-removal">click to go</a></td>
      </tr>
      <tr>
      <td>Safari</td>
      <td><a href="https://support.apple.com/en-us/HT201265">click to go</a></td>
      </tr>
      <tr>
      <td>Microsoft Edge</td>
      <td><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">click to go</a></td>
      </tr>
      <tr>
      <td>Opera</td>
      <td><a href="https://www.opera.com/help/tutorials/security/privacy/">click to go</a></td>
      </tr>
      <tr>
      <td>Yandex</td>
      <td><a href="https://yandex.com.tr/support/browser-classic/personal-data-protection/cookies.xml">click to go</a></td>
      </tr>
      </tbody></table>
      <p>To manage cookie preferences in other browsers, you can review the help or support page of the relevant browser.</p>
      <h3 id="domestic-and-international-transfer-of-personal-data">Domestic and international transfer of personal data</h3>
      <p>Your personal data is shared with hotels, airlines, suppliers that provide transfer services and the relevant foreign agency in order to complete your reservation and provide the service to you. Your personal data may also be shared with other electronic platforms in the country and abroad so that you can search, make reservations and stay in hotels that do not have a contract with Turistikrota for the realization of your trip. Personal data can be shared with these institutions and organizations upon the duly requests of official institutions authorized to request information and documents from private law legal entities in accordance with their own founding laws.</p>
      <p>In addition, if you accept the cookie clarification text that appears when you enter the Turistikrota website, improving the customer experience, making better use of the products and services offered by Turistikrota to the customers and visitors, customizing them according to the needs, tastes and usage habits of the customers/visitors, and offering and recommending them. can be transferred to foreign platforms and applications for the purpose of determining the strategies of Turistikrota.</p>
      <h2 id="vii-privacy-policy">VII. Privacy Policy</h2>
      <p>Whether employees or other people&#39;s data on Turistikrota is confidential. No one can use, copy, reproduce, transfer to others, use this data for any other purpose, except for business purposes, without contract or compliance with the law.</p>
      <h2 id="viii-transaction-security">VIII. Transaction Security</h2>
      <p>All necessary technical and administrative measures are taken to protect the personal data collected by Turistota.com, to prevent it from falling into the hands of unauthorized persons and to prevent our customers and prospective customers from being victims. In this framework, it is ensured that the software complies with the standards, that the third parties are carefully selected and that the data protection policy is complied with within the company. Safety measures are constantly being renewed and improved.</p>
      <h3 id="protection-of-credit-card-and-payment-information">Protection of Credit Card and Payment Information</h3>
      <p>The payment and credit card information received from you due to the service we provide is transmitted to a third-party service provider serving in line with the PCI DSS ((Payment Card Industry Data Security Standards) security standards and stored by us until the date when the service fees are collected. Security created under the name of PCI DSS The standards ensure the implementation of secure payment solutions and the payment systems of merchants, service providers, financial institutions and organizations by a council formed by leading payment card service providers such as American Express, Discover, JCB International, Mastercard and Visa Inc. Credit card and other payment information you share with Turistikrota is forwarded to a third-party security service provider with Level 1 security certificate in line with the mentioned standards. will be kept until the service fees are collected by the suppliers as stated above. After this date, information will continue to be stored for a certain period of time in order to ensure transaction security.</p>
      <h2 id="ix-audit">IX. Audit</h2>
      <p>Turistikrota carries out the necessary internal and external audits for the protection of personal data.</p>
      <h2 id="x-notification-of-violations">X. Notification of Violations</h2>
      <p>When it is notified of any violation of personal data, Turistikrota takes immediate action to remedy the violation. It minimizes the harm of the concerned and compensates the damage. When personal data is obtained by unauthorized persons, it immediately notifies the Personal Data Protection Board.</p>
      <p>Applications can also be made according to the procedures specified at <a href="https://turistikrota.com">turistikrota.com</a> regarding the notification of violations.</p>
      `,
    },
  },
  privacyNote: {
    tr: {
      title: "Gizlilik Bildirimi",
      content: `<p>turistikrota.com&#39;u ziyaret etmeniz ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmanız sırasında size ve talep ettiğiniz hizmetlere ilişkin olarak elde ettiğimiz bilgilerin ne şekilde kullanılacağı ve korunacağı işbu &quot;Gizlilik Politikası&quot;nda belirtilen şartlara tabidir. Bu web sitesini ziyaret etmekle ve bu site vasıtasıyla hizmetlerimizden yararlanmakla işbu Gizlilik Politikası&#39;nı okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.</p>
      <h2 id="bilgilerin-toplanması-kullanılması-ve-korunması">Bilgilerin Toplanması, Kullanılması ve Korunması</h2>
      <p>turistikrota.com&#39;u ziyaretiniz sırasında, kişisel bilgileriniz (isim, adres, e-posta adresi, telefon numarası vb.) ancak sizin açık rızanızla ve talebiniz doğrultusunda toplanmaktadır. Bu bilgiler, turistikrota.com&#39;un sunduğu hizmetlerden yararlanmanız, turistikrota.com&#39;un hizmetlerini geliştirmesi ve sizlere daha iyi hizmet verebilmesi için kullanılmaktadır. turistikrota.com, bu bilgileri, sizin açık rızanız olmaksızın, yasal yükümlülüklerin yerine getirilmesi, hukuki bir soruşturmanın veya hukuki bir işlemin gerektirdiği durumlarda resmi makamlara açıklayabilir.</p>
      <p>Toplanan bu kişisel bilgilerden elde edilecek istatisliksel veriler turistikrota.com&#39;un pazarlama faaliyetlerinde kullanılabilecektir. turistikrota.com, kişisel bilgilerinizi, hizmetlerimizi geliştirmek ve sizlere daha iyi hizmet verebilmek için kullanabilecektir.</p>
      <p>turistikrota.com e-bülten listesinden ayrılmak istiyorsanız, e-bültenin alt kısmında bulunan &quot;abonelikten ayrıl&quot; linkine tıklayarak abonelikten ayrılabilirsiniz.</p>
      <p>Müşterinin sisteme girdiği tüm bilgilere sadece Müşteri ulaşabilmekte ve bu bilgileri sadece Müşteri değiştirebilmektedir. Bir başkasının bu bilgilere ulaşması ve bunları değiştirmesi mümkün değildir.</p>
      <p>İnternetin yapısı gereği bilgiler internet üzerinde yeterli güvenlik önlemleri olmasına rağmen dolaşabilir ve yetkili olmayan kişiler tarafından alınıp kullanılabilir. Bu kullanım ve kullanımdan doğabilecek zararlardan turistikrota.com sorumlu değildir.</p>
      <p>Toplanan bilgiler genel kullanıma açık olmayan güvenli bir ortamda saklanmaktadır.</p>
      <p>turistikrota.com 256 bit SSL sertifikası ile korunmaktadır. Bu sertifika ile kullanıcı bilgileri şifrelenerek gönderilmektedir. Bu sayede kullanıcı bilgilerinin üçüncü şahıslar tarafından ele geçirilmesi engellenmektedir.</p>
      `,
    },
    en: {
      title: "Privacy Notice",
      content: `<p>How to use and protect the information we obtain about you and the services you request during your visit to Turistrota.com and your use of the services we offer through this site are subject to the conditions set forth in this &quot;Privacy Policy&quot;. By visiting this website and using our services through this website, you declare that you have read, understood and accepted this Privacy Policy.</p>
      <h2 id="collection-use-and-protection-of-information">Collection, Use and Protection of Information</h2>
      <p>During your visit to Turistrota.com, your personal information (name, address, e-mail address, telephone number, etc.) is collected only with your express consent and upon your request. This information is used in order for you to benefit from the services offered by Turistrota.com, to improve its services and to serve you better. Turistrota.com may disclose this information to official authorities, without your express consent, in cases where the fulfillment of legal obligations, a legal investigation or a legal action requires it.</p>
      <p>The statistical data to be obtained from this collected personal information can be used in the marketing activities of Turistrota.com. Turistrota.com will be able to use your personal information to improve our services and to serve you better.</p>
      <p>If you want to unsubscribe from Turistrota.com e-bulletin list, you can unsubscribe by clicking the &quot;unsubscribe&quot; link at the bottom of the e-bulletin.</p>
      <p>Only the Customer can access all the information that the Customer enters into the system, and only the Customer can change this information. It is not possible for anyone else to access and change this information.</p>
      <p>Due to the nature of the internet, information can be circulated on the internet despite adequate security measures and can be taken and used by unauthorized persons. Turistrota.com is not responsible for this use and any damages that may arise from its use.</p>
      <p>The collected information is stored in a secure environment that is not open to public use.</p>
      <p>Turistrota.com is protected with a 256-bit SSL certificate. With this certificate, user information is encrypted and sent. In this way, user information is prevented from being captured by third parties.</p>
      `,
    },
  },
  termsOfUse: {
    tr: {
      title: "KULLANIM KOŞULLARI",
      content: `<p>Siteye erişiminizden veya siteyi kullanımınızdan önce lütfen bu sözleşmeyi dikkatle okuyunuz. Siteye erişmekle veya siteyi kullanmakla, aşağıda belirtilen şartlar ve hükümlerle bağlı olmayı kabul etmektesiniz. Eğer bu şartlar ve hükümlerle bağlı olmak istemezseniz, siteye erişmeyebilir veya siteyi kullanmayabilirisiniz ve böyle bir kullanıma başladıysanız kullanımı derhal durdurmalısınız. <a href="https://www.turistikrota.com/">turistikrota.com</a> bu sözleşmede her zaman değişiklik yapabilir ve bu değişiklikler değiştirilmiş sözleşmenin siteye konulmasıyla derhal yürürlük kazanır. Siz bu değişikliklerden haberdar olmak amacıyla periyodik olarak sözleşmeyi gözden geçirmeyi kabul etmektesiniz ve siteye devam eden erişiminiz veya devam eden siteyi kullanımınız değiştirilmiş sözleşmeyi kesin olarak kabul ettiğiniz anlamına gelecektir.</p>
      <h2 id="1-ticari-markalar-fikri-mülkiyet-telif-hakları">1. Ticari Markalar, Fikri Mülkiyet, Telif Hakları</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a> sitesinin tüm hakları Turistikrota LTD. ŞTİ.&#39;a aittir. Bu web sayfalarında yayımlanan içerikler (örneğin yazılım, ürünler, logolar, vs. gibi ticari markalar, bilgiler, raporlar, resimler ve grafikler), ulusal ve uluslar arası kanunlar ve uluslar arası sözleşmeler ile korunmaktadır.</p>
      <p>Kullanıcı Website dahilinde bulunan ürünleri, bigileri, her türlü veritabanını, resimleri, metinleri, ikonları, görsel ve işitsel vesair imgeleri, video klipleri, dosyaları, web sitesi, software-code&#39;ların html kodu ve diğer kodlar vs. ile, tasarımları, katalogları ve listeleri kısmen ya da tamamen çoğaltamayacağı, kopyalamayacağı, dağıtmayacağı, işlemeyeceğini, online ya da diğer bir yöntem kullanılmak suretiyle göndermeyeceğini, gerek bu eylemleri ile gerekse de başka yollarla, turistikrota ile doğrudan ve/veya dolaylı olarak rekabete girmeyeceğini kabul ve taahhüt etmektedir.</p>
      <p>Sitede yer alan her türlü bilgi ve materyal;</p>
      <p>Site&#39;nin tamamı ya da bir bölümü revize edilerek, ekleme yapılarak ya da bir kısmı değiştirilerek farklı bir biçimde kullanılamaz.</p>
      <p>Site&#39;den alınabilecek her türlü bilgi (yazılı ya da görsel) rahatlıkla görülebilecek büyüklükte &quot;© 2023, <a href="https://www.turistikrota.com/">Turistikrota</a>, Tüm Hakları Saklıdır&quot; ifadesi eklenmeden kullanılamaz.</p>
      <p>Sitede yer alan ifadeler içerisindeki 3. kişi ya da kurumlara ait tescilli marka, hizmet, logo vb. uyarılar ve ayraçlar, siteden alıntı yapıldığında kaldırılamaz.</p>
      <h2 id="2-kullanım-koşullarının-değiştirilmesi">2. Kullanım Koşullarının Değiştirilmesi</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a>&#39;un herhangi bir sebep göstermeksizin ve önce veya sonra ihbarda bulunmaksızın bu kullanım koşullarını değiştirme, ilavede bulunma veya yenileme hakkı saklıdır. Bu sayfalarda, mevcut ve güncellenmiş versiyon bulunmaktadır. Bu web sayfalarının kullanılması ile kullanıcı, mevcut versiyon ile sınırlandırılmış olduğunu kabul eder.
      Alınan yurtdışı otel rezervasyon ve hizmetleri ile ilgili olarak <a href="https://developer.ean.com/terms/en">açmak için tıklayınız</a> adresindeki şart ve koşullar da geçerli olacaktır.</p>
      <h2 id="3-üçüncü-parti-sitelere-verilen-bağlantılara-linklere-dair">3. Üçüncü Parti Sitelere Verilen Bağlantılara (Linklere) Dair</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a>, sitesinde direkt ya da dolaylı yoldan diğer sitelere bağlantı (link) verilebilir. Bu bağlantıların amacı bilgi vermek ya da reklamdır. Kullanıcı, site üzerindeki linklerin kaynakları üzerinde <a href="https://www.turistikrota.com/">turistikrota.com</a>&#39;un hiçbir kontrolü olmadığı için, <a href="https://www.turistikrota.com/">turistikrota.com</a>&#39;un linklerinin gösterdiği web sitelerinin veya kaynakların ulaşabilirliğinden sorumlu olmadığını ve bu web siteleri ve kaynaklar üzerinde bulunan veya bunlardan elde edilebilen hiçbir içerik, reklam, ürün veya diğer materyalden sorumlu olmadığını kabul eder. Kullanıcı ayrıca <a href="https://www.turistikrota.com/">turistikrota.com</a>&#39;un böyle herhangi bir web sitesi veya kaynak üzerinde veya bunlar yoluyla elde edilebilen herhangi bir içerik, mal veya hizmete güvenerek veya bunlar tarafından veya bunların kullanımı ile bağlantılı olarak neden olunan ya da neden olunduğu iddia edilen herhangi bir zarar veya kayıptan doğrudan veya dolaylı olarak sorumlu olmadığını kabul eder.</p>
      <h2 id="4-kullanıcı-bilgileri-hakkında">4. Kullanıcı Bilgileri Hakkında</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a> sitesinde; kullanıcıların dolduracakları talep ve rezervasyon formlarının yer aldığı bölümler yer almaktadır. Bu bölümlerin doldurulması esnasında kullanıcıların küfür, tehdit, tahrik, rahatsız edici sözleri ve kanuna aykırı içerikler kullanma ve başkalarının kanuni ve kişisel haklarına zarar verme hakları yoktur. Ayrıca bu formların kopyalanarak kullanılmaları veya yeniden üretilmek amacıyla örnek olarak kullanılmaları yasaktır. Kullanıcılarının bu sayfaları kullanarak bir ürün ya da hizmet satma, ticari amaçlı reklam yapma ve benzeri ticari davranışlarda bulunma hakları yoktur.</p>
      <h2 id="5-hak-ve-sorumluluklar">5. Hak ve Sorumluluklar</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a> sitesine bulunan içerikler sürekli kontrol edilmekte ve güncellenmektedir. Ancak, <a href="https://www.turistikrota.com/">turistikrota.com</a> ve sahibi Turistikrota LTD. ŞTİ. site içeriğindeki bilgi ve fiyat hatalarından sorumlu tutulamaz, sayfalarında her türlü değişiklik ve yeniliği istediği anda yapabilir. Bu değişikliklerden dolayı doğabilecek hiçbir rezervasyon, satış veya bilgi hatasından dolayı <a href="https://www.turistikrota.com/">turistikrota.com</a> sitesi ve sahibi Turistikrota LTD. ŞTİ.&#39;ne sorumluluk yüklenemez.</p>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a> sitesinin tüm kullanım ve içerik hakları saklıdır. Sitenin tüm hakları, sahibi olan firma Turistikrota LTD. ŞTİ.&#39;ne aittir. İzinsiz kullanımı kanunlarla yasaklanmıştır.</p>
      `,
    },
    en: {
      title: "TERMS OF USE",
      content: `<p>Please read this agreement carefully before accessing or using the site. By accessing or using the site, you agree to be bound by the terms and conditions set forth below. If you do not wish to be bound by these terms and conditions, you may not access or use the site, and if you have started such use, you should immediately stop using it. <a href="https://www.turistikrota.com/">turistikrota.com</a> can make changes to this agreement at any time, and these changes will become effective immediately after the amended agreement is posted on the site. You agree to periodically review the agreement to be aware of these changes, and your continued access to or use of the site will constitute your final acceptance of the amended agreement.</p>
      <h2 id="1-trademarks-intellectual-property-copyrights">1. Trademarks, Intellectual Property, Copyrights</h2>
      <p>All rights of <a href="https://www.turistikrota.com/">turistikrota.com</a> belong to Turistikrota LTD. STI. The contents published on these web pages (eg trademarks, information, reports, pictures and graphics such as software, products, logos, etc.) are protected by national and international laws and international agreements.</p>
      <p>The user can use the products, information, all kinds of databases, pictures, texts, icons, visual and audio images, video clips, files, website, html code of software-codes and other codes etc. on the Website. agree that it will not reproduce, copy, distribute, process or send designs, catalogs and lists partially or completely, online or by using any other method, and will not compete directly and/or indirectly with the tourist route, either by these actions or by other means, and commits.</p>
      <p>All kinds of information and materials on the site;</p>
      <p>All or part of the Site cannot be used in a different way by revising, adding or changing a part of it.</p>
      <p>Any information (written or visual) that can be obtained from the Site cannot be used without adding the phrase &quot;© 2023, <a href="https://www.turistikrota.com/">Turistikrota</a>, All Rights Reserved&quot; in a size that can be easily seen.</p>
      <p>Registered trademarks, services, logos, etc. belonging to third parties or institutions in the expressions on the site. Warnings and brackets cannot be removed when quoting from the site.</p>
      <h2 id="2-changing-the-terms-of-use">2. Changing the Terms of Use</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a> reserves the right to change, add or renew these terms of use without giving any reason and without prior or subsequent notice. These pages have the recent and updated versions. By using these web pages, the user accepts that it is limited to the current version.
      The terms and conditions at the address <a href="https://developer.ean.com/terms/en">click to open</a> shall also apply to international hotel reservations and services received.</p>
      <h2 id="3-regarding-links-links-to-third-party-sites">3. Regarding Links (Links) to Third Party Sites</h2>
      <p><a href="https://www.turistikrota.com/">turistikrota.com</a>, a direct or indirect link to other sites can be given. The purpose of these links provide information or ads. The user, because <a href="https://www.turistikrota.com/">turistikrota.com</a> has no control over the sources of the links on the site, <a href="https://www.turistikrota.com/">turistikrota.com</a> accepts that it is not responsible for the accessibility of the websites or resources to which its links point, and is not responsible for any content, advertisement, product or other material found on or obtained from these websites and resources. The User may also rely on or in connection with the use of <a href="https://www.turistikrota.com/">turistikrota.com</a> any content, goods or services available on or through any such website or resource. accepts that it is not directly or indirectly responsible for any damage or loss caused or alleged to be caused.</p>
      <h2 id="4-about-user-information">4. About User Information</h2>
      <p>On <a href="https://www.turistikrota.com/">turistikrota.com</a>; There are sections where requests and reservation forms to be filled by users are included. During the completion of these sections, users do not have the right to use profanity, threats, incitement, offensive words and illegal content and to harm the legal and personal rights of others. In addition, it is forbidden to copy these forms or to use them as examples for reproduction. Users do not have the right to sell a product or service, advertise for commercial purposes or engage in similar commercial behavior by using these pages.</p>
      <h2 id="5-rights-and-responsibilities">5. Rights and Responsibilities</h2>
      <p>The contents of <a href="https://www.turistikrota.com/">turistikrota.com</a> are constantly checked and updated. However, <a href="https://www.turistikrota.com/">turistikrota.com</a> and its owner Turistikrota LTD. STI. cannot be held responsible for information and price errors in the site content, and can make any changes and innovations on its pages at any time. <a href="https://www.turistikrota.com/">turistikrota.com</a> site and its owner Turistikrota LTD. STI. cannot be held responsible.</p>
      <p>All usage and content rights of <a href="https://www.turistikrota.com/">turistikrota.com</a> site are reserved. All rights of the site belong to the owner company Turistikrota LTD. STI. Unauthorized use is prohibited by law.</p>
      `,
    },
  },
};
