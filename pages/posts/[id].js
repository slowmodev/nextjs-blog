import Head from 'next/head';
import Layout from '../../components/layout';
import { blogposts } from '../../data/data.js'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </small>
                <br />
                <p className={utilStyles.paragraph}>{postData.content}</p>
            </article>
        </Layout>
      );
}
export async function getStaticPaths() {
    const paths = blogposts.map((item)=> {
        return {
            params: {
                id: item.id
            }
        }
    })
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = blogposts.find(post => post.id === params.id)
    return {
        props: {postData}
    }
}