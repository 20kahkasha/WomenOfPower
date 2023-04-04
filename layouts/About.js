import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/about.module.css"
const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <> 
    
    <section className="section px-6 sm:px-10 ml-130 mr-130">
      <div className="container text-center">
       
        {markdownify(title, "h1", "h1 text-center sm:text-[40px] md:text-[60px] lg:text-[80px] p-0 text-slate-600 font-sans" )}

        <div className="content text-left mt-12 md:mt-16 lg:mt-20 max-w-3xl mx-auto">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        {/* <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="lg:col-6 ">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(education.title, "h2", "section-title mb-12")}
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className="mb-7 md:col-6" key={"degree-" + index}>
                    <h4 className="text-base lg:text-[25px]">
                      {degree.university}
                    </h4>
                    <p className="mt-2">{degree.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="experience mt-10 lg:mt-0 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(experience.title, "h2", "section-title mb-12")}
              <ul className="row">
                {experience?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"experience-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
         {/* {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )} */}
      </div>
    </section>
    </>
  );
};

export default About;
