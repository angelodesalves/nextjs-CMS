import Head from 'next/head';
import { Footer } from '../../components/commons/Footer';
import { Menu } from '../../components/commons/Menu';
import { pageHOC } from '../../components/wrappers/pageHOC';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';
import { cmsService } from '../../infra/cms/cmsService';
import { Box, Text, Link, Image, theme } from '../../theme/components';

export async function getStaticProps({ preview }) {
  const { data: cmsContent } = await cmsService({
		query: `
      query {
        pageFaq {
          pageContent {
            section {
              componentName: __typename
              ... on CommonSeoBlockRecord {
                id
                title
              }
              ... on CommonMenuRecord {
                id
              }
              ... on CommonFooterRecord {
                id
              }
              ... on PagefaqDisplayquestionRecord {
                id
                categories {
                  id
                  title
                  questions {
                    id
                    title
                  }
                }
              }
            }
          }
        }
      }
    `,
		preview
	});

  return {
    props: {
      cmsContent,
      categories: [
        {
          id: 'b4bb5090',
          name: 'Por onde começar',
          questions: [
            {
              id: 'f138c88d',
              name: 'Consigo entrar no mercado de trabalho com os cursos da Alura?',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }
          ]
        },
        {
          id: 'c4bb5090',
          name: 'Formações e Projetos',
          questions: [
            {
              id: 'h138c88d',
              name: 'Qual é a diferença do certificado de participação para o certificado de conclusão de formação?',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            }
          ]
        }
      ]
    }
  }
}

function FAQAllQuestionsScreen({ categories }) {
  return (
    <>
      <CMSSectionRender pageName="pageFaq" />

      {/* <Head>
        <title>FAQ - Alura</title>
      </Head>

      <Menu />

      

      <Footer /> */}
    </>
  )
}

export default pageHOC(FAQAllQuestionsScreen);
