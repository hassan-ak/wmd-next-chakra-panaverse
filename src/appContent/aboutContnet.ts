// About Page Content

import { v4 as uuidv4 } from 'uuid';

// About Item interface
export interface About_Item {
  title: string;
  id: string;
  para: {
    content: string;
    id: string;
  }[];
}

export const ABOUT_ITEMS: About_Item[] = [
  // Content 01
  {
    title: 'The Future of Internet',
    id: uuidv4(),
    para: [
      {
        content: `The internet is without a doubt the most important technological development 
        in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the 
        internet as we know it by introducing novel features and advancements. Metaverse will 
        make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain,
        cloud and edge computing, voice computing, ambient computing, and more.`,
        id: uuidv4(),
      },
      {
        content: `Citi is the latest Wall Street business to give a positive prognosis for Web 
        3.0 and the Metaverse, terms used to depict a future internet vision centered on 
        decentralized technologies and virtual worlds. Citi stated in a March 2022 research 
        paper that the metaverse economy might have a total addressable market of up to $13 
        trillion and five billion people by 2030.`,
        id: uuidv4(),
      },
    ],
  },
  // Content 02
  {
    title: 'The Program in a Nutshell',
    id: uuidv4(),
    para: [
      {
        content: `In this brand-new type of curriculum, students will learn how to make money 
        and boost exports in the classroom and will begin doing so within six months of the 
        program's beginning. It resembles a cross between a corporate venture and an 
        educational project.`,
        id: uuidv4(),
      },
    ],
  },
  // Content 03
  {
    title: 'Program of Studies',
    id: uuidv4(),
    para: [
      {
        content: `This curriculum is intended for beginners who want to learn software development 
        from the ground up. The first three quarters are shared by all specialties and are dedicated 
        to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It 
        is going to be a fifteen-month long hybrid program that includes both onsite and online 
        classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on 
        learning by educating students to produce projects. To accommodate everyone, courses will be 
        held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid 
        teaching format, with core onsite classes complemented by online Zoom laboratories and recorded 
        videos.`,
        id: uuidv4(),
      },
    ],
  },
  // Content 04
  {
    title: 'The Outcome for Participants of the Program',
    id: uuidv4(),
    para: [
      {
        content: `The graduates of this program will own products (Full-Stack App Templates, AR and VR 
            Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will 
            also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). 
            This would give Pakistani professionals and students a fantastic opportunity to better their 
            financial situation while also giving the economy a much-needed boost by expanding software 
            exports.
        `,
        id: uuidv4(),
      },
    ],
  },
  //
];
