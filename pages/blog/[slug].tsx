import { useRouter } from 'next/router'
import {parsePostFile, getAllSlugs, Post} from "@/postApi"
import { PostComponent } from '@/components/post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Sidebar } from '../_document'
import Head from 'next/head'

export const getStaticPaths: GetStaticPaths = async function() {
    return {fallback: false, paths: getAllSlugs().map(x => ({params: {slug: x}}))}
}

export const getStaticProps: GetStaticProps = async function(c) {
    const {slug} = c.params!;
    if(!slug) {
        return {redirect: '/', props: {}}
    }
    const post = parsePostFile(`${slug}.md`)
    if(!post) {
        return {redirect: '/', props: {}}
    }
    return {props: {post}}
}
const Post = (props: {post: Post}) => {
//   const router = useRouter()
//   const { slug } = router.query
//   if(!slug || Array.isArray(slug)) return <div>Not found</div>

    return <>
    <Head>
        <title>{props.post.title + " - fikisipi"}</title>
        <meta content={props.post.title} name="og:title" />
        <meta content={props.post.desc} name="twitter:description" />
        <meta content={props.post.desc} name="description" />
        <meta content={props.post.desc} name="og:description" />
    </Head>
    <div className='container mx-auto mt-5 lgx:w-[900px]'>
        <PostComponent post={props.post} renderContent={false} />
        </div>
    <div className='bg-white'>
        <div className='mx-auto container grid lg:grid-cols-bb'>
        <div className="px-4 py-10 bg-white text-black" style={{ colorScheme: "light" }}>
            <PostComponent post={props.post} renderTitle={false} />
            </div>
            <Sidebar/>
        </div>
    </div>
  </>
  return <div>{JSON.stringify(props)}</div>
//   let post = parsePostFile(slug);
//     if(!post) return <div>Not found</div>

//   return <PostComponent post={post }/>
}

export default Post