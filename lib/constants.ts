export const SITE = {
  name: "Dr. Roberto Chacur",
  clinic: "Clínica Leger",
  title: "Harmonização Glútea — Dr. Roberto Chacur | Clínica Leger",
  description:
    "Mais contorno, mais projeção e bumbum liso, sem cirurgia. Técnicas avançadas realizadas pelo Dr. Roberto Chacur, referência internacional em contorno corporal.",
} as const;

export const WHATSAPP = {
  number: "5511999999999",
  message: "Olá! Gostaria de saber mais sobre a Harmonização Glútea.",
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
  },
} as const;

export const CLINICS = [
  {
    city: "São Paulo",
    neighborhood: "Moema",
    address: "Alameda dos Maracatins, 1435 - sala 801",
    region: "Moema, São Paulo - SP",
    image:
      "https://www.robertochacur.com/wp-content/uploads/2022/10/RECEPCAO-sp-LEGER.jpg",
    mapUrl:
      "https://maps.google.com/?q=Alameda+dos+Maracatins,+1435,+Moema,+São+Paulo",
  },
  {
    city: "Rio de Janeiro",
    neighborhood: "Barra da Tijuca",
    address: "Av. João Cabral de Mello Neto, 850 - bloco 3, sala 1603",
    region: "Barra da Tijuca, Rio de Janeiro - RJ",
    image:
      "https://www.robertochacur.com/wp-content/uploads/2022/10/RECEPCAO-RJ-LEGER.jpg",
    mapUrl:
      "https://maps.google.com/?q=Av+João+Cabral+de+Mello+Neto,+850,+Barra+da+Tijuca,+Rio+de+Janeiro",
  },
] as const;

export const CITIES = ["São Paulo", "Rio de Janeiro", "Porto Alegre"] as const;

export const PRESS_ITEMS = [
  {
    outlet: "Terra",
    headline:
      "Tratamento parcialmente concluído! Conheça o procedimento realizado por Isabelle Nogueira",
    person: "Isabelle Nogueira",
    image: "/images/press-isabelle.png",
  },
  {
    outlet: "O Globo",
    headline:
      "Juju Salimeni faz novo procedimento no bumbum e aprova resultado: 'Muito mais bonito, pele lisinha'",
    person: "Juju Salimeni",
    image: "/images/press-juju.jpg",
  },
  {
    outlet: "IstoÉ",
    headline:
      "Em busca da pele perfeita, Giovanna Antonelli se rende a inovador procedimento estético",
    person: "Giovanna Antonelli",
    image: "/images/press-giovanna.jpg",
  },
] as const;

export const NAV_LINKS = [
  { label: "Resultados", href: "#resultados" },
  { label: "Técnicas", href: "#tecnicas" },
  { label: "Dr. Chacur", href: "#dr-chacur" },
  { label: "Clínicas", href: "#clinicas" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FAQS = [
  {
    question: "Quem pode realizar o procedimento?",
    answer:
      "O tratamento é indicado para mulheres e homens que desejam melhorar o contorno, a projeção ou a textura da pele do bumbum. Pode ser uma boa opção para quem se incomoda com falta de volume, celulite, flacidez, depressões laterais ou assimetrias na região. Durante a consulta, o Dr. Roberto Chacur avalia a anatomia da paciente, a qualidade da pele e a estrutura muscular do glúteo para entender quais técnicas são mais indicadas para cada caso. Pacientes saudáveis e com expectativas realistas em relação aos resultados costumam ser boas candidatas ao tratamento.",
  },
  {
    question: "O procedimento dói?",
    answer:
      "Os procedimentos são realizados em consultório, com anestesia local, o que torna o tratamento bastante confortável para a maioria dos pacientes. Pode haver um leve desconforto durante ou após o procedimento, mas ele costuma ser temporário e bem tolerado.",
  },
  {
    question: "O procedimento é seguro?",
    answer:
      "Sim. Quando realizado por um médico experiente e com técnica adequada, o procedimento é considerado seguro. Na Clínica Leger são utilizados protocolos médicos rigorosos, ambiente clínico apropriado e produtos aprovados pela ANVISA, sempre respeitando as características individuais de cada paciente.",
  },
  {
    question: "Quais produtos são utilizados?",
    answer:
      "Podem ser utilizados produtos absorvíveis ou permanentes, sempre aprovados pela ANVISA. A escolha do material é feita durante a consulta, levando em consideração as características da paciente, seus objetivos e a indicação médica do Dr. Roberto Chacur.",
  },
  {
    question: "Qual o tempo de recuperação?",
    answer:
      "O retorno às atividades do dia a dia costuma ser rápido. Após a GoldIncision, a paciente já sai da clínica utilizando uma bermuda específica e recebe um kit de cuidados pós-procedimento. É necessário evitar atividades físicas por alguns dias, seguindo as orientações médicas. No caso do preenchimento glúteo, pode ser necessário evitar esforços físicos intensos por um período, mas atividades normais como trabalhar, dirigir ou cuidar da rotina costumam ser mantidas.",
  },
  {
    question: "Pode viajar após realizar o tratamento?",
    answer:
      "Muitas pacientes realizam o tratamento e retornam para suas cidades ou países após o procedimento. A Clínica Leger atende frequentemente pacientes de outras regiões e até de fora do Brasil. As orientações podem variar de acordo com cada caso, por isso é importante conversar com o médico durante a avaliação.",
  },
  {
    question: "Como é feita a avaliação?",
    answer:
      "A avaliação pode ser realizada presencialmente na clínica ou de forma online. O Dr. Roberto Chacur analisa fatores como formato do glúteo, qualidade da pele, presença de celulite, proporções corporais e os objetivos da paciente. A partir dessa análise, é elaborado um planejamento personalizado, podendo incluir preenchimento glúteo, GoldIncision ou a combinação das duas técnicas.",
  },
] as const;

export const FOOTER_DISCLAIMER = `Entre as possíveis complicações da harmonização glútea podemos citar cicatriz, desconforto, dor local, e inchaço (edema) durante, após e até tardiamente ao procedimento, além de alteração de sensibilidade e manchas, por um período de tempo variável, após o procedimento. Há ainda a possibilidade de surgimento de nódulos palpáveis, raramente visíveis, bem como infecção na área tratada, sendo essa complicação tratada com uso de antibióticos e curativos locais. Existe também a possibilidade do surgimento de telangiectasias (vasos/vasinhos) decorrente do volume de preenchimento implantado, assim como hematoma, que pode ocorrer por acúmulo de sangue no local da aplicação. Existe também uma chance rara de isquemia e necrose, com a perda de pele/de tecido, sendo que essas complicações têm mais chance de ocorrer em fumantes. Podem ocorrer ainda assimetria, entre os dois lados do corpo, porém, em geral, é discreta e corrigida com uma segunda aplicação ou "retoque". Em alguns casos pode ocorrer o surgimento de estrias na região tratada devido às características fisiológicas do paciente e volume de preenchimento implantado. Há casos, na literatura médica, de vasculite e embolia pulmonar independente do produto utilizado.`;
