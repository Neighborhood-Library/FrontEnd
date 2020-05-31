import React from 'react';
import './about.scss';

const About = () => {
  const team = [
    {
      name: 'Brandon Desselle',
      profile: 'https://github.com/BDesselle',
      img: './img/brandon-desselle.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Cam Perry',
      profile: 'https://github.com/cpscott1',
      img: './img/cam-perry.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Ali Rajaii',
      profile: 'https://github.com/rajaii',
      img: './img/ali-rajaii.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Shobhita Vaishnav',
      profile: 'https://github.com/shobhitav',
      img: './img/shobhita-vaishnav.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Carlos Sanchez',
      profile: 'https://github.com/Lohrem',
      img: './img/carlos-sanchez.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Mariana Huh',
      profile: 'https://github.com/marianahuh',
      img: './img/mariana-huh.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Joshua Stevens',
      profile: 'https://github.com/JustSpokenCodes',
      img: './img/joshua-stevens.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Oscar Valenzuela',
      profile: 'https://github.com/oscarv0101',
      img: './img/oscar-valenzuela.jpg',
      role: 'Software Engineer'
    },
    {
      name: 'Shawn Henry',
      profile: 'https://github.com/shenry45',
      img: './img/shawn-henry.jpg',
      role: 'Software Engineer'
    }
  ];

  return (
    <div className="page-wrap">
      <section className='card'>
        <h1 className="card-title">About</h1>
        <hr />
        <p>As people who have a Deep appreciation for printed books, we wanted to be able to speak to others about the mental adventures we go through everytime we dive back into our favorite book. This allows book lovers of all ages and genres to interact with each other and share their own books with others.
        </p>
        <p>
        Libraries are "places of <b>Freedom</b>” — <strong>Freedom</strong> to Choose, <strong>Freedom</strong> to Discover, <strong>Freedom</strong> to Question — <strong>Freedom</strong> to Borrow! In a world where very little is ever truly ‘free’, libraries are champions of <strong>Freedom</strong>." In this app, we provide a <b><em>Simple and Feature-Rich</em></b> solution for lending and borrowing books to/from fellow users.
        </p>
      </section>
      <section className='card'>
        <h2 className="card-title">Team</h2>
        <hr />
        <div className="team-cont">
          {
            team.map(memb => {
              return <div key={memb.name}>
                <img className='profile-avi' src={memb.img} alt="team member"/>
                <p className="text-bold">
                  <a href={memb.profile} target="_blank" rel="noopener noreferrer">
                    {memb.name}
                  </a>
                </p>
                <p className='about-role'>{memb.role}</p>
              </div>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default About;
