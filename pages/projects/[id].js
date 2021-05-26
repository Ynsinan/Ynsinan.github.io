import Head from "next/head";
import projects from "../../projects";
import styles from '../../styles/projectDetail.module.scss'
import Link from "next/link"
import { IoChevronBackCircle } from "react-icons/io5"
const ProjectDetails = ({ project }) => {
    return (
        <div>
            <Head>
                <title>Project | {project.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.projectDetail}>

                <Link href="/">
                    <IoChevronBackCircle size={50} className={styles.icon} />
                </Link>
                <div className={styles.projectName}>
                    {project.name}
                    <hr />
                </div>
                <div className={styles.main}>
                    <h1>Main</h1>
                </div>
                <div className={styles.footer}>
                    <h1>footer</h1>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = () => {
    const paths = projects.map((project) => {
        return {
            params: { id: project.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const project = projects.find(
        (project) => project.id.toString() === params.id
    );
    return {
        props: {
            project,
        },
    };
};
export default ProjectDetails;
