import Head from "next/head";
import projects from "../../projects";
import styles from '../../styles/projectDetail.module.scss'
import Link from "next/link"
import { IoChevronBackCircle } from "react-icons/io5"
const ProjectDetails = ({ project }) => {
    return (
        <>
            <Head>
                <title>Project | {project.name}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="project personal website"></meta>
            </Head>
            <div className={styles.projectDetail}>

                <Link href="/">
                    <a><IoChevronBackCircle size={50} className={styles.icon} /></a>

                </Link>
                <div className={styles.projectName}>
                    {project.name}

                </div>
                <div className={styles.main}>
                    <div className={styles.content}>
                        {project.content}
                    </div>

                    <div className={styles.links}>
                        <button className={styles.connectionButton}>
                            <Link style={{ textDecoration: 'none' }} href={project.live}>
                                <a>Live Connection</a>
                            </Link>
                        </button>
                        <button className={styles.connectionButton}>
                            <Link style={{ textDecoration: 'none' }} href={project.github}>
                                <a>Github Repository</a>
                            </Link>
                        </button>

                    </div>


                </div>

            </div>
        </>
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
