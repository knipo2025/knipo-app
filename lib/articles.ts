export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
  content: string; // HTML-like string with paragraphs
}

export const articles: Article[] = [
  {
    slug: "histoire-africaine-fondation-identite",
    title: "L'histoire africaine comme fondation de l'identité",
    excerpt:
      "Comprendre d'où l'on vient est le premier acte de lucidité. L'histoire africaine n'est pas un héritage de défaite — c'est une source de puissance inexploitée.",
    category: "Histoire",
    tags: ["histoire", "identité", "Afrique", "racines"],
    date: "Mars 2025",
    readTime: "8 min",
    featured: true,
    content: `
      <p>On nous a appris à regarder l'histoire africaine comme un point de départ à partir duquel tout va de travers. La colonisation, l'esclavage, le sous-développement — autant de narratifs qui forment un prisme déformant entre nous et notre propre passé.</p>
      <p>Mais ce prisme n'est pas neutre. Il a été fabriqué. Et quand on comprend cela, quelque chose se libère en soi.</p>
      <h3>L'Afrique avant le regard de l'autre</h3>
      <p>Avant que Léon l'Africain ne décrive Tombouctou comme une cité d'or et de savoir, avant même que les cartographes européens ne l'incluent dans leurs atlas, l'Empire du Mali sous Mansa Moussa rayonnait sur une superficie équivalente à celle de l'Europe occidentale.</p>
      <p>L'université de Sankoré à Tombouctou accueillait jusqu'à 25 000 étudiants. Des manuscrits en arabe, en tamasheq et en ajami y étaient copiés, commentés, enseignés. La médecine, la théologie, l'astronomie, le droit — tout cela se transmettait dans des salles qui existaient depuis des siècles.</p>
      <p>Ce n'est pas de la nostalgie. C'est un fait. Et les faits changent ce qu'on croit être possible.</p>
      <h3>Pourquoi ça te concerne directement</h3>
      <p>Quand tu grandis sans avoir entendu parler de Cheikh Anta Diop, de Nzinga du Congo, de l'empire de Kush ou du Ghana précolonial, tu construis ton identité sur un vide. Et dans ce vide, d'autres narratifs s'installent — ceux qui te définissent comme secondaire, comme héritier d'une civilisation sans histoire.</p>
      <p>La connaissance de ton histoire n'est pas un luxe intellectuel. C'est un outil de reconstruction psychologique. C'est ce qui te permet de cesser de te définir en creux — par rapport à ce qu'on t'a dit que tu n'étais pas — pour commencer à te définir en plein.</p>
      <h3>Le premier acte</h3>
      <p>Se renseigner. Lire. Questionner les récits qu'on nous a servis comme des vérités absolues. L'histoire africaine est immense, diverse, parfois contradictoire — comme toute vraie histoire. Elle mérite d'être approchée avec la même rigueur et la même curiosité qu'on accorde aux autres grandes civilisations.</p>
      <p>Quand tu te réappropries ton histoire, tu ne deviens pas militant ou revanchard. Tu deviens simplement complet.</p>
    `,
  },
  {
    slug: "empires-africains-meconnus",
    title: "Mali, Songhaï, Kush — les empires qu'on oublie de mentionner",
    excerpt:
      "Des civilisations qui ont rayonné pendant des siècles, avant que l'histoire officielle ne les relègue aux notes de bas de page.",
    category: "Histoire",
    tags: ["empires", "Mali", "Songhaï", "Kush", "histoire africaine"],
    date: "Fév. 2025",
    readTime: "10 min",
    featured: false,
    content: `
      <p>En 1324, Mansa Moussa quitte le Mali pour le pèlerinage à La Mecque. Sa caravane comprend 60 000 hommes, 12 000 esclaves ornés d'or, 80 chameaux portant chacun 300 livres de poudre d'or. Son passage au Caire fait effondrer le cours de l'or pour plus d'une décennie.</p>
      <p>Ce n'est pas une légende. Ce sont des faits documentés par des chroniqueurs arabes de l'époque.</p>
      <h3>L'Empire du Mali (1235–1645)</h3>
      <p>Fondé par Soundiata Keïta après la bataille de Kirina, l'Empire du Mali s'étend du Sénégal actuel jusqu'au Niger. À son apogée, il contrôle la majeure partie de l'Afrique de l'Ouest et concentre une part considérable des réserves mondiales d'or et de sel.</p>
      <p>Tombouctou, Djenné, Niani — autant de centres intellectuels où se croisent marchands, savants, juristes. La Grande Mosquée de Djenné, reconstruite en 1907 sur des fondations du XIIIe siècle, reste aujourd'hui le plus grand bâtiment en terre cuite du monde.</p>
      <h3>L'Empire Songhaï (1464–1591)</h3>
      <p>Sous Askia le Grand, le Songhaï atteint son zenith. L'administration est décentralisée, la justice codifiée, le commerce réglementé. L'université de Sankoré accueille des étudiants de tout le monde islamique. Les manuscrits de Tombouctou — estimés à 700 000, dont beaucoup restent non catalogués — témoignent d'une production intellectuelle remarquable.</p>
      <h3>Le royaume de Kush et l'Égypte noire</h3>
      <p>Entre 760 et 656 avant J.-C., des pharaons nubiens de la XXVe dynastie gouvernent l'Égypte. Taharqa, l'un d'eux, est mentionné dans la Bible. Les pyramides de Méroé, plus nombreuses que celles d'Égypte, jalonnent encore le Soudan actuel.</p>
      <p>Ces faits ne servent pas à nourrir un orgueil mal placé. Ils servent à rétablir une proportion. À rappeler que l'histoire du monde est aussi, profondément, une histoire africaine.</p>
    `,
  },
  {
    slug: "soundiata-keita-lion-mandingue",
    title: "Soundiata Keïta — le lion qui n'a jamais plié",
    excerpt:
      "Boiteux dans son enfance, exilé, abandonné — et pourtant fondateur du plus grand empire d'Afrique de l'Ouest. L'histoire de Soundiata Keïta est un manuel de résilience.",
    category: "Figures Historiques",
    tags: ["Soundiata", "Mali", "résilience", "leadership"],
    date: "Janv. 2025",
    readTime: "7 min",
    content: `
      <p>Il ne pouvait pas marcher. Dans un monde où la force physique définissait le statut, l'enfant qui allait devenir le Mansa — le seigneur — des seigneurs du Mali passait ses premières années à ramper.</p>
      <p>Sa mère, Sogolon Kondé, était moquée à la cour du roi Naré Maghann Konaté. Son fils boiteux ne serait rien. Il était promis à l'oubli.</p>
      <h3>L'humiliation comme combustible</h3>
      <p>Un jour, une servante se moque de Sogolon parce qu'elle doit encore aller cueillir les feuilles de baobab pour son fils alors que les autres enfants le font eux-mêmes. Cette humiliation est le déclencheur. Soundiata se lève. Il demande une barre de fer. Il se redresse. Il marche.</p>
      <p>La suite appartient à l'épopée : l'exil, le retour, la coalition, la bataille de Kirina contre Soumaoro Kanté, la fondation de l'empire.</p>
      <h3>Ce que cette histoire nous dit</h3>
      <p>Soundiata Keïta n'est pas qu'un personnage historique. C'est une architecture psychologique. Son histoire dit : ce que le monde perçoit comme une limitation peut être une réserve de puissance. L'exil peut être une école. L'humiliation peut être un carburant.</p>
      <p>La Charte du Kurukanfuga, qu'il fait proclamer après sa victoire, est l'un des premiers textes de droits humains de l'histoire. Elle protège les femmes, abolit certaines formes d'esclavage, garantit la liberté de parole.</p>
      <p>Un homme que rien ne destinait à régner a fondé l'un des plus grands empires de l'histoire et rédigé l'une des premières chartes humanistes. Ce n'est pas de l'histoire ancienne. C'est de l'inspiration permanente.</p>
    `,
  },
  {
    slug: "nzinga-angola-resistance",
    title: "Nzinga du Congo — la reine qui a tenu tête à l'empire portugais",
    excerpt:
      "Pendant 40 ans, la reine Nzinga a résisté militairement, diplomatiquement et spirituellement à la colonisation portugaise. Un modèle de stratégie et de détermination.",
    category: "Figures Historiques",
    tags: ["Nzinga", "Angola", "résistance", "colonisation", "femme"],
    date: "Janv. 2025",
    readTime: "8 min",
    content: `
      <p>En 1621, Ana de Sousa Nzinga se rend à Luanda pour négocier avec le gouverneur portugais. À son arrivée, elle n'y trouve aucun siège prévu pour elle — une insulte diplomatique délibérée. Nzinga ordonne à une servante de se mettre à quatre pattes et s'assied sur son dos. Elle négocie d'égale à égale.</p>
      <p>Ce geste, documenté par des chroniqueurs portugais, résume ce qu'était Nzinga : une femme qui refusait de se laisser définir par les règles imposées par l'autre.</p>
      <h3>Quarante ans de résistance</h3>
      <p>Reine du Ndongo puis du Matamba (actuels Angola), Nzinga conduit des guerres de guérilla contre les forces portugaises pendant quatre décennies. Elle forge des alliances avec les Jagas, une fédération de guerriers nomades, et transforme son royaume en refuge pour les esclaves évadés.</p>
      <p>Quand la force militaire ne suffit pas, elle recourt à la diplomatie. Quand la diplomatie échoue, elle reprend les armes. À plus de 60 ans, elle monte encore à cheval pour inspecter ses troupes.</p>
      <h3>L'héritage</h3>
      <p>Elle meurt en 1663, à environ 80 ans, après avoir maintenu l'indépendance de son royaume contre la puissance coloniale la plus avancée de son époque. Une statue de Nzinga se dresse aujourd'hui à Luanda, la capitale angolaise.</p>
      <p>Ce qu'elle incarne : la résistance comme acte de dignité. L'intelligence stratégique comme arme première. La détermination comme mode de vie.</p>
    `,
  },
  {
    slug: "connaissance-soi-acte-liberte",
    title: "Se connaître soi-même : le premier acte de liberté",
    excerpt:
      "Avant de changer le monde, il faut comprendre qui on est, ce qu'on porte, et d'où viennent nos peurs. La connaissance de soi n'est pas du narcissisme — c'est de la lucidité.",
    category: "Connaissance de Soi",
    tags: ["introspection", "liberté", "connaissance", "développement"],
    date: "Mars 2025",
    readTime: "6 min",
    featured: false,
    content: `
      <p>"Connais-toi toi-même" — cette injonction gravée au fronton du temple de Delphes. Socrate en a fait le cœur de sa philosophie. Les traditions africaines en ont fait le fondement de l'initiation. L'islam, le christianisme, le bouddhisme — toutes les grandes traditions spirituelles la placent au centre.</p>
      <p>Mais dans le quotidien des jeunes adultes en 2025, elle se perd dans le bruit.</p>
      <h3>Ce qu'on ne nous apprend pas</h3>
      <p>L'école t'apprend à te comparer aux autres via des notes. Les réseaux sociaux t'apprennent à te mesurer à des images curatées. Le travail t'apprend à te définir par ta fonction. Résultat : la plupart des gens ne savent pas ce qu'ils veulent vraiment, pourquoi ils réagissent comme ils réagissent, ni ce qui les meut profondément.</p>
      <p>Cette ignorance de soi est coûteuse. Elle génère des choix par défaut, des relations construites sur des bases fausses, des carrières subies plus que choisies.</p>
      <h3>Par où commencer</h3>
      <p>Observer ses réactions avant de les justifier. Quand quelque chose te met en colère, en peur, ou au contraire t'illumine — noter plutôt qu'expliquer. L'explication vient après.</p>
      <p>Questionner ses croyances fondamentales. Pas les opinions politiques, mais les convictions profondes sur soi-même : "Je ne mérite pas", "Les autres sont plus compétents", "Je dois prouver ma valeur." Ces croyances dirigent 80% de nos comportements à notre insu.</p>
      <p>Pratiquer la solitude intentionnelle. Pas l'isolement dépressif, mais les moments volontairement soustraits au flux — marcher sans téléphone, journaliser, méditer. Ces espaces sont les seuls où la vraie voix intérieure peut se faire entendre.</p>
      <p>La connaissance de soi n'est pas une destination. C'est une pratique. Et c'est la plus utile de toutes.</p>
    `,
  },
  {
    slug: "discipline-liberte-vraie",
    title: "La discipline est une forme de liberté",
    excerpt:
      "Contre-intuitif mais vrai : ceux qui se contraignent volontairement sont les plus libres. Pourquoi la discipline n'est pas une prison mais une architecture de vie.",
    category: "Discipline",
    tags: ["discipline", "liberté", "routine", "croissance"],
    date: "Fév. 2025",
    readTime: "7 min",
    content: `
      <p>La discipline a mauvaise presse. On l'associe à la rigidité, à la contrainte, à la privation. Dans une culture de l'immédiateté où tout est disponible en un clic, elle paraît presque archaïque.</p>
      <p>Mais regardons ce qui se passe vraiment.</p>
      <h3>La liberté sans structure</h3>
      <p>L'homme sans discipline n'est pas libre — il est soumis à ses impulsions. Il mange ce qui lui plaît, dort quand ça vient, remet à demain ce qui exige de l'effort aujourd'hui. En surface, c'est de la liberté. En réalité, c'est une forme d'esclavage doux : celui des désirs immédiats qui gouvernent sans que tu t'en rendes compte.</p>
      <p>La personne disciplinée, elle, a décidé ce qui compte. Et ce choix lui donne une direction. La direction donne un sens. Et le sens produit une forme de paix qu'aucune consommation d'instant ne peut procurer.</p>
      <h3>La discipline comme amour de soi</h3>
      <p>Quand tu te lèves tôt même quand ton lit est chaud, tu honores la version future de toi qui voulait que tu le fasses. Quand tu tiens ta parole même quand c'est inconfortable, tu construis une relation de confiance avec toi-même.</p>
      <p>La discipline, vue de près, n'est pas de la sévérité. C'est du respect. De soi. De ses engagements. De son temps.</p>
      <h3>Par où commencer</h3>
      <p>Ne commence pas par tout changer. Commence par une chose. Une routine le matin. Une heure sans téléphone. Un engagement tenu. La discipline se construit comme un muscle — progressivement, avec régularité, sans dramaturgie.</p>
      <p>Le paradoxe : plus tu te disciplines sur ce qui compte, plus tu te libères du reste. Parce que tu n'es plus gouverné par le hasard.</p>
    `,
  },
  {
    slug: "vision-long-terme-monde-immediatete",
    title: "Développer une vision de long terme dans un monde de l'immédiateté",
    excerpt:
      "Comment cultiver la patience stratégique quand tout pousse à l'instant ? La vision longue n'est pas un luxe — c'est une survie.",
    category: "Vision",
    tags: ["vision", "long terme", "stratégie", "patience"],
    date: "Fév. 2025",
    readTime: "8 min",
    content: `
      <p>Jeff Bezos avait une règle simple chez Amazon : toutes les décisions importantes devaient être évaluées non pas sur leurs résultats à 12 mois, mais sur leurs résultats à 7 ans. Cette temporalité différente changeait radicalement les choix.</p>
      <p>La plupart des gens raisonnent à 7 jours. Les meilleurs stratèges raisonnent à 7 ans.</p>
      <h3>Pourquoi le long terme est difficile</h3>
      <p>Le cerveau humain n'est pas naturellement équipé pour ça. L'évolution nous a programmés pour répondre à l'immédiat — la menace présente, la récompense disponible maintenant. Les réseaux sociaux ont rationalisé cette tendance à l'extrême : tout devient urgent, tout demande une réaction instantanée.</p>
      <p>Dans cet environnement, cultiver une vision longue est un acte contre-culturel. Et c'est exactement pourquoi c'est une compétence rare et précieuse.</p>
      <h3>Construire sa vision</h3>
      <p>Commence par les fins, pas par les moyens. Pas "je veux gagner plus d'argent" mais "dans 10 ans, comment est ma vie ? Qu'est-ce que je fais ? Pour qui ? Avec qui ?"</p>
      <p>Ensuite, remonte vers le présent. Si c'est là que tu veux être dans 10 ans, qu'est-ce qui doit être vrai dans 5 ans ? Dans 2 ans ? Dans 6 mois ? Aujourd'hui ?</p>
      <p>La vision longue ne supprime pas l'action quotidienne. Elle lui donne un sens. Et c'est le sens qui rend l'effort soutenable.</p>
    `,
  },
  {
    slug: "foi-force-interieure",
    title: "Foi et force intérieure — s'élever par la spiritualité",
    excerpt:
      "La foi n'est pas un refuge pour les faibles. C'est un ancrage pour ceux qui veulent aller loin. Comprendre la dimension spirituelle de l'élévation.",
    category: "Foi & Spiritualité",
    tags: ["foi", "spiritualité", "intériorité", "élévation"],
    date: "Janv. 2025",
    readTime: "9 min",
    content: `
      <p>Dans les débats contemporains, la foi est souvent présentée comme un obstacle à la raison. Ou comme un consolation pour ceux qui ne peuvent pas affronter la réalité nue. C'est une lecture superficielle.</p>
      <p>Les plus grandes figures de l'histoire africaine et mondiale — Cheikh Ahmadou Bamba, Martin Luther King, Malcolm X, Nelson Mandela — avaient en commun une dimension spirituelle profonde. Pas malgré leur lucidité politique. À cause d'elle.</p>
      <h3>Ce que la foi donne vraiment</h3>
      <p>La foi donne un horizon. Elle dit : l'effort a un sens même quand les résultats ne sont pas immédiats. Elle ancre dans quelque chose qui dépasse l'ego, les humiliations du présent, les obstacles du parcours.</p>
      <p>Psychologiquement, la foi — quelle que soit la tradition — fonctionne comme un régulateur. Elle diminue l'anxiété existentielle, donne un cadre moral, connecte à une communauté. Ce ne sont pas des bénéfices abstraits. Ce sont des avantages concrets pour naviguer une vie difficile.</p>
      <h3>Foi et action</h3>
      <p>La vraie foi n'est pas passive. Elle produit de l'action. Cheikh Anta Diop était musulman profondément croyant et l'un des intellectuels africains les plus rigoureux du XXe siècle. Il n'y avait pas de contradiction — il y avait une cohérence.</p>
      <p>Ta foi — quelle qu'elle soit — peut être une ressource. À condition de la pratiquer profondément plutôt que de la porter comme une étiquette.</p>
    `,
  },
  {
    slug: "jeunesse-afrique-quete-sens",
    title: "La jeunesse africaine face au vide — quête de sens et d'identité",
    excerpt:
      "Entre la pression des réseaux sociaux, les injonctions contradictoires de la tradition et de la modernité, les jeunes Africains cherchent. Voici pourquoi ils trouvent souvent.",
    category: "Société",
    tags: ["jeunesse", "identité", "sens", "Afrique", "modernité"],
    date: "Déc. 2024",
    readTime: "7 min",
    content: `
      <p>La génération née entre 1995 et 2010 en Afrique et dans la diaspora est prise dans une tension particulière. Elle est connectée à un monde global qui valorise certains modèles de réussite — l'entrepreneur tech, l'influenceur, l'expatrié réussi. Et simultanément enracinée dans des cultures qui valorisent d'autres choses : la communauté, le respect des anciens, la transmission.</p>
      <p>Ces deux horizons ne sont pas incompatibles. Mais les articuler demande un travail que personne n'enseigne vraiment.</p>
      <h3>Le vide identitaire</h3>
      <p>Quand on grandit en ayant peu ou pas accès à une représentation positive et complexe de soi — pas de héros qui te ressemblent dans les livres d'école, peu de modèles dans les médias mainstream, une histoire nationale présentée en creux — on construit son identité sur du sable.</p>
      <p>Ce vide est souvent comblé par des narratifs extérieurs : les stéréotypes négatifs de la culture dominante, ou au contraire un afrocentrisme revanchard qui cherche la dignité dans la confrontation. Les deux sont des réponses à une même blessure.</p>
      <h3>Ce que cherchent vraiment les jeunes</h3>
      <p>À travers les questionnements identitaires, les jeunes cherchent quelque chose de simple et de profond : une raison valable d'être ici, maintenant, tels qu'ils sont. Pas une raison abstraite — une raison incarnée dans une histoire, une tradition, un projet.</p>
      <p>KNIPO est né de cette conviction : le savoir — l'histoire africaine, la connaissance de soi, la discipline, la foi — n'est pas un luxe intellectuel pour une élite. C'est le carburant dont chaque jeune a besoin pour construire une vie debout.</p>
    `,
  },
  {
    slug: "cheikh-anta-diop-guerrier-verite",
    title: "Cheikh Anta Diop — le guerrier de la vérité historique",
    excerpt:
      "Il a démontré que les Égyptiens anciens étaient des Africains noirs, contre l'establishment académique mondial. L'histoire d'un homme qui n'a jamais cédé.",
    category: "Figures Historiques",
    tags: ["Cheikh Anta Diop", "Égypte", "histoire", "académie"],
    date: "Déc. 2024",
    readTime: "9 min",
    content: `
      <p>En 1954, Cheikh Anta Diop soutient sa thèse à Paris. Sa question centrale : et si les anciens Égyptiens étaient des Africains noirs ? L'université refuse de valider le travail. Il lui faudra 6 ans et une deuxième thèse pour être accepté.</p>
      <p>Mais il avait raison. Et il le savait. Alors il a continué.</p>
      <h3>La méthode</h3>
      <p>Diop ne se contentait pas d'affirmations. Il utilisait la linguistique comparée (montrant les parentés entre le wolof et l'égyptien ancien), la mélanine dosimétrique (pour analyser les pigments des momies), l'anthropologie physique. Sa démarche était rigoureusement scientifique dans un domaine où ses adversaires préféraient le consensus à la preuve.</p>
      <h3>L'héritage</h3>
      <p>Ses deux œuvres principales — "Nations nègres et culture" et "Civilisation ou barbarie" — restent des références incontournables de l'afrocentrisme académique. Elles ont ouvert une brèche dans laquelle des générations d'historiens, d'archéologues et d'anthropologues africains se sont engouffrés.</p>
      <p>Diop est mort en 1986 sans avoir vu son travail pleinement reconnu par l'establishment académique européen. Mais son impact sur la conscience africaine mondiale est immense et durable.</p>
      <p>Ce qu'il incarne : la persévérance intellectuelle comme forme de résistance. La rigueur comme arme. Le fait de refuser que quelqu'un d'autre définisse ton histoire à ta place.</p>
    `,
  },
  {
    slug: "samory-toure-resistance-coloniale",
    title: "Samory Touré — l'aigle du Wassoulou face à la France",
    excerpt:
      "Chef de guerre, stratège politique, bâtisseur d'empire — Samory Touré a résisté à l'armée française pendant 16 ans. L'histoire d'une résistance sans compromis.",
    category: "Figures Historiques",
    tags: ["Samory Touré", "résistance", "colonisation", "Afrique de l'Ouest"],
    date: "Nov. 2024",
    readTime: "8 min",
    content: `
      <p>Les généraux français le surnommaient "l'ennemi le plus redoutable qu'aient rencontré nos armes en Afrique". Pendant 16 ans, de 1882 à 1898, Samory Touré a défié l'expansion coloniale française en Afrique de l'Ouest avec une intelligence militaire et politique qui forçait l'admiration de ses adversaires.</p>
      <h3>Le stratège</h3>
      <p>Né vers 1830 dans ce qui est aujourd'hui la Guinée, Samory commence sa vie comme simple commerçant. Il construit progressivement un empire — le Wassoulu — à travers des alliances, du commerce et des conquêtes militaires. Son armée est modernisée : il acquiert des fusils, puis organise la fabrication locale d'armes.</p>
      <p>Face à l'avancée française, il développe une stratégie unique : la "terre brûlée combinée à la retraite stratégique". Quand les Français progressent, il déplace sa population et ses ressources vers l'est, reconstruisant l'empire sur de nouvelles terres tout en harcèlant les arrières français.</p>
      <h3>La chute</h3>
      <p>Capturé en 1898 par le colonel Gouraud grâce à une trahison, il est exilé au Gabon où il meurt en 1900. Son empire ne lui survit pas militairement, mais son exemple inspire les résistances anticoloniales du XXe siècle.</p>
      <p>Samory Touré est aujourd'hui considéré comme un héros national en Guinée, en Côte d'Ivoire et au Mali. Son histoire dit : on peut perdre une guerre et gagner une légende.</p>
    `,
  },
  {
    slug: "education-entre-heritage-avenir",
    title: "L'éducation : ce que l'école ne t'a pas dit",
    excerpt:
      "Le système éducatif a été conçu pour produire des travailleurs conformes. Comprendre ça est le début d'une vraie éducation.",
    category: "Éducation",
    tags: ["éducation", "système scolaire", "apprentissage", "autonomie"],
    date: "Nov. 2024",
    readTime: "7 min",
    content: `
      <p>L'école publique telle qu'on la connaît a été inventée au XIXe siècle, en grande partie pour répondre aux besoins de la révolution industrielle : former des individus capables de respecter des horaires, d'obéir à une hiérarchie, d'accomplir des tâches répétitives avec fiabilité.</p>
      <p>Ce n'est pas un complot. C'est un contexte historique. Mais le contexte a changé, et l'école n'a pas changé à la même vitesse.</p>
      <h3>Ce que l'école enseigne vraiment</h3>
      <p>Au-delà des matières — maths, français, histoire — l'école enseigne une façon d'apprendre : en attendant qu'on te dise quoi apprendre, en étant évalué par rapport aux autres, en visant la bonne réponse plutôt que la bonne question.</p>
      <p>Ces apprentissages implicites ont des conséquences. Ils forment des adultes qui attendent l'autorisation avant d'agir, qui doutent de leur capacité à apprendre seuls, qui confondent diplôme et compétence.</p>
      <h3>La vraie éducation</h3>
      <p>La vraie éducation commence là où l'école s'arrête. Elle est autodidacte, curieuse, transversale. Elle lit des livres que personne n'impose. Elle questionne des vérités présentées comme établies. Elle apprend de l'échec plutôt que de le craindre.</p>
      <p>Les traditions africaines d'éducation par l'initiation, par le griot, par la transmission orale avaient une chose que l'école moderne a perdu : elles transmettaient du sens en même temps que du savoir. Pas seulement quoi penser, mais pourquoi cela importait.</p>
    `,
  },
  {
    slug: "miroir-brise-effacement-identitaire",
    title: "Le miroir brisé — comment l'Afrique a été défigurée",
    excerpt:
      "L'effacement identitaire n'est pas un accident. Il est systémique, historique, et toujours à l'œuvre. Voir clair pour avancer libre.",
    category: "Société",
    tags: ["identité", "colonisation", "décolonisation mentale", "culture"],
    date: "Oct. 2024",
    readTime: "9 min",
    content: `
      <p>Frantz Fanon l'a écrit dans "Les Damnés de la terre" : la colonisation ne se contente pas de prendre les terres et les ressources. Elle prend l'image que le colonisé a de lui-même. Elle lui apprend à se voir à travers le regard du colonisateur — comme secondaire, comme archaïque, comme nécessitant d'être "développé".</p>
      <p>Ce travail de déformation mentale est plus durable que n'importe quelle occupation militaire.</p>
      <h3>Les mécanismes</h3>
      <p>L'effacement commence dans les manuels scolaires. Quand les civilisations africaines précoloniales sont absentes du programme, ou réduites à quelques lignes, l'enfant apprend que son histoire commence avec la colonisation. Ce manque laisse un vide — et les vides se remplissent toujours de quelque chose.</p>
      <p>Il continue dans les médias. Les représentations du continent africain dans les médias occidentaux sont dominées par trois images : la guerre, la famine, la corruption. Ces images ne sont pas fausses — elles correspondent à des réalités. Mais elles sont radicalement incomplètes. Elles construisent une image du continent qui pèse sur ceux qui en sont issus, même à des milliers de kilomètres.</p>
      <h3>Reconstruire le miroir</h3>
      <p>La décolonisation mentale n'est pas une posture politique. C'est un travail intérieur de remise à niveau : apprendre ce qu'on ne t'a pas appris, déconstruire des automatismes de pensée assimilés sans s'en rendre compte, choisir consciemment les récits qui nourrissent ton identité.</p>
      <p>Ce n'est pas un processus de haine. C'est un processus de réparation.</p>
    `,
  },
  {
    slug: "action-eclairee-contribution",
    title: "Du savoir à l'acte — comment transformer la connaissance en impact",
    excerpt:
      "Lire, comprendre, s'informer — tout ça ne vaut rien sans action. Comment passer de la prise de conscience à la contribution réelle.",
    category: "Action",
    tags: ["action", "impact", "contribution", "engagement"],
    date: "Oct. 2024",
    readTime: "6 min",
    content: `
      <p>Il y a une pathologie répandue dans les milieux "éveillés" : l'accumulation de savoir sans transformation du comportement. On lit Cheikh Anta Diop, on regarde des documentaires sur l'histoire africaine, on suit des comptes de développement personnel — et la vie reste fondamentalement la même.</p>
      <p>Le problème n'est pas le savoir. C'est la distance entre le savoir et l'acte.</p>
      <h3>Pourquoi l'inaction persiste</h3>
      <p>Le savoir sans ancrage dans une pratique devient confort. Il donne l'impression de progresser sans le coût réel de la transformation. "Je sais que je devrais…" est la phrase la plus dangereuse de la langue française pour ceux qui veulent grandir.</p>
      <h3>L'action éclairée</h3>
      <p>L'action éclairée n'est pas l'agitation. Ce n'est pas faire pour faire. C'est agir en alignement avec ce qu'on a compris — dans sa vie quotidienne, dans ses relations, dans ses choix professionnels, dans sa contribution à la communauté.</p>
      <p>Elle commence petit. Un engagement tenu. Une conversation courageuse qu'on avait évitée. Une compétence développée parce qu'elle sert un but. Ces petits actes construisent une architecture de vie qui ressemble à ce qu'on veut vraiment.</p>
      <p>Le savoir devient puissant quand il produit de l'action. Sinon, c'est juste de la décoration intellectuelle.</p>
    `,
  },
  {
    slug: "diaspora-entre-deux-mondes",
    title: "Vivre entre deux mondes — la force méconnue de la diaspora",
    excerpt:
      "Ni tout à fait d'ici, ni tout à fait de là-bas. Cette position inconfortable est en réalité une richesse stratégique unique. Comment la transformer en levier.",
    category: "Diaspora",
    tags: ["diaspora", "identité", "double culture", "Afrique", "Europe"],
    date: "Sept. 2024",
    readTime: "7 min",
    content: `
      <p>Grandir entre deux cultures est souvent vécu comme un manque : on n'est jamais assez de l'un, jamais assez de l'autre. Pas assez africain pour les uns, pas assez européen pour les autres. Cette double exclusion peut être déstabilisante.</p>
      <p>Mais regardée autrement, c'est une position d'une richesse extraordinaire.</p>
      <h3>La double lecture</h3>
      <p>Celui ou celle qui a grandi entre deux cultures peut lire les deux de l'intérieur. Il comprend les codes implicites de chaque système — les non-dits, les hiérarchies invisibles, les ressorts psychologiques. Cette double lecture est rare. Elle est précieuse.</p>
      <p>Elle permet de faire des ponts là où les autres voient des murs. De traduire — pas seulement des langues, mais des façons d'être au monde.</p>
      <h3>La responsabilité qui vient avec</h3>
      <p>La diaspora africaine en Europe ou en Amérique du Nord est dans une position historique unique. Elle a accès à des ressources, à des formations, à des réseaux que la grande majorité des Africains du continent n'ont pas. Et elle a une connexion — affective, familiale, culturelle — à l'Afrique.</p>
      <p>Cette position crée une responsabilité : utiliser ses ressources et sa position non pas pour s'intégrer dans un système qui t'exclut par principe, mais pour construire quelque chose — pour soi, pour les siens, pour le continent.</p>
    `,
  },
  {
    slug: "transmission-generation-suivante",
    title: "Transmettre — pourquoi c'est la responsabilité de notre génération",
    excerpt:
      "On a reçu un héritage qu'on n'a pas toujours choisi. Mais on choisit ce qu'on transmet. La transmission est un acte politique, culturel et spirituel.",
    category: "Transmission",
    tags: ["transmission", "héritage", "génération", "responsabilité"],
    date: "Sept. 2024",
    readTime: "7 min",
    content: `
      <p>Le griot dans les traditions africaines n'est pas un simple conteur. Il est la mémoire vivante de la communauté. Sans lui, les généalogies se perdent, les victoires s'oublient, les leçons disparaissent.</p>
      <p>Dans un monde où tout va vite et où la mémoire collective est fragmentée par les algorithmes, la question de la transmission est plus urgente que jamais.</p>
      <h3>Ce qu'on nous a transmis</h3>
      <p>Notre génération a reçu des transmissions contradictoires. D'un côté, des traditions orales, des valeurs familiales, une mémoire de ce que signifie être africain. De l'autre, des systèmes éducatifs et médiatiques qui ont souvent dévalorisé cet héritage.</p>
      <p>On a grandi avec cette contradiction. Et on a travaillé — souvent seuls, souvent sans guide — pour y trouver un sens.</p>
      <h3>Ce qu'on choisit de transmettre</h3>
      <p>La génération qui vient après nous n'aura pas à partir de zéro si on fait le travail. Transmettre, c'est leur épargner certaines de nos erreurs. C'est leur donner les outils qu'on a mis des années à construire.</p>
      <p>La transmission n'est pas que biologique — aux enfants, aux frères et sœurs. Elle est aussi horizontale : aux amis, aux membres de la communauté, aux inconnus qui cherchent ce qu'on a trouvé.</p>
      <p>C'est pour ça que KNIPO existe. C'est pour ça qu'on écrit.</p>
    `,
  },
  {
    slug: "routine-knipo-discipline-quotidienne",
    title: "La Routine KNIPO — construire une journée qui construit une vie",
    excerpt:
      "Ce n'est pas ce que tu fais parfois qui définit qui tu es. C'est ce que tu fais tous les jours. La structure d'une routine pour l'élévation.",
    category: "Pratiques",
    tags: ["routine", "discipline", "quotidien", "habitudes"],
    date: "Août 2024",
    readTime: "6 min",
    content: `
      <p>Les grandes figures de l'histoire que KNIPO cite — Soundiata Keïta, Nzinga, Malcolm X, Cheikh Ahmadou Bamba — avaient toutes en commun une chose qu'on ne mentionne pas souvent dans leur biographie : des pratiques quotidiennes stables. Des rituels. Une structure.</p>
      <p>Ce n'est pas un détail. C'est le fondement.</p>
      <h3>Pourquoi la routine libère</h3>
      <p>Chaque décision quotidienne coûte de l'énergie mentale. Qu'est-ce que je mange, quand je travaille, par où je commence ma journée — si ces questions restent ouvertes chaque matin, elles drainent une énergie qui pourrait aller vers des choses plus importantes.</p>
      <p>La routine automatise le bas niveau pour libérer l'énergie vers le haut niveau. C'est pour ça que Steve Jobs portait toujours la même tenue. Ce n'est pas de l'excentricité — c'est une économie d'énergie cognitive.</p>
      <h3>Les 4 piliers de la Routine KNIPO</h3>
      <p><strong>Discipline</strong> — Une habitude physique pour ancrer le corps : sport, marche, mouvement. Le corps doit être mis en mouvement avant que l'esprit ne s'installe dans ses vieilles ornières.</p>
      <p><strong>Foi</strong> — Un moment de recueillement, de gratitude, de prière ou de méditation. Pas une durée fixe, mais une intentionnalité : se connecter à quelque chose de plus grand que soi.</p>
      <p><strong>Connaissance</strong> — Lire, écouter, apprendre. Au moins 20 minutes par jour de contenu qui élève — une page d'un bon livre, un épisode de podcast, un article qui dérange les certitudes.</p>
      <p><strong>Action</strong> — Identifier une tâche importante — pas urgente, mais importante — et la faire en premier. Avant les emails, avant les réseaux sociaux, avant les demandes des autres.</p>
      <p>Ces quatre blocs, pratiqués avec régularité, construisent une vie. Pas en un jour. En mille jours.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export const categories = [
  "Tout",
  "Histoire",
  "Figures Historiques",
  "Connaissance de Soi",
  "Discipline",
  "Foi & Spiritualité",
  "Société",
  "Éducation",
  "Action",
  "Diaspora",
  "Transmission",
  "Pratiques",
  "Vision",
];
