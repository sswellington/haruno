const en = {
    data() {
        return {
            p1: 'I made the transition from data science, machine learning and image processing to Asp.Net Core Backend, developing and managing MVC, MVVP, MVP applications; integrated with DevOps, having quality inspection by SonarQube; and following the Agile, SOLID and Design Pattern Methodologies.',
            p2: 'I am a former member of the Brazilian Computer Society, experience with data science, machine learning, image processing, web development, database modeling.',
            p3: 'I worked with image processing techniques in civil construction and dermatology. This one was designed to build a computer vision system that counts the concrete area in order to determine the presence of aggregates. That one, the development of computer-assisted diagnostic systems called 2PLA for tissue segmentation in photographs of chronic ulcers in the lower limbs. So, non-intrusive approach to dermatological analyses. Obtained the TCCLS Best Paper Award in 2019 by the IEEE',
            p4: 'I developed a website with the purpose of education, health, sales and entertainment, in which the following technologies were used Onion Architecture.',
            p5: 'I performed the database modeling which involved the following steps: Requirements Analysis and Requirements Elicitation; Conceptual Design; Mapping to the Model; Logical Model - Entity Relationship Model; Normalization and Mapping; Relational Model; and Implementation.'
        }
    }
}

Vue.createApp(en).mount('#en')

const br = {
    data() {
        return {
            p1: 'Realizei a transição da área de ciência de dados, aprendizagem de máquina e processamento de imagens para Backend Asp.Net Core, desenvolvendo e administrando aplicação MVC, MVVP, MVP; integrado com o DevOps, tendo a inspecção da qualidade pelo SonarQube; e seguindo as Metodologia Ágil, SOLID e Design Pattern.',
            p2: 'Sou ex-membro da Sociedade Brasileira de Computação, experiência com ciência de dados, aprendizado de máquina, processamento de imagens, desenvolvimento web, modelagem de bancos de dados.',
            p3: 'Trabalhei com técnicas de processamento de imagens junto a construção civil e a dermatologia. Essa elaborada para construção de sistema de visão computacional que realiza a contagem da área de concreto a fim de determinar a presença de agregados. Aquela, a elaboração de sistemas de diagnóstico assistido por computador denominado 2PLA para a segmentação de tecidos em fotografias de úlceras crônicas em membros inferiores. Então, abordagem não intrusiva para análises dermatológicas. Obtive o TCCLS Best Paper Award em 2019 pela IEEE',
            p4: 'Desenvolvi site tendo a finalidade para educação, saúde, venda, entretenimento e fins governamentais. Usando Arquitetura Cebola.',
            p5: 'Realizei a modelagem de banco de dados no qual envolveu as seguinte etapas: Análise de requisitos e Elicitação de Requisitos; Projeto Conceitual; Mapeamento para o Modelo; Modelo Lógico - Modelo Entidade Relacionamento; Normalização e Mapeamento; Modelo Relacional; e Implementação.'
        }
    }
}

Vue.createApp(br).mount('#pt-br')
