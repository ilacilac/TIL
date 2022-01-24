import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilsStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  // params : { id: 'pre-rendering' }
  console.log('params', params);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* {postData.id} */}
      <article>
        <h1 className={utilsStyles.headingXl}>{postData.title}</h1>
        <div className={utilsStyles.lightText}>
          {/* {postData.date} */}
          <Date dateString={postData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  )
}