import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      name: 'Brandon Desselle',
      profile: 'https://github.com/BDesselle',
      img: './img/brandon-desselle.jpg'
    },
    {
      name: 'Cam Perry',
      profile: 'https://github.com/cpscott1',
      img: './img/cam-perry.jpg'
    },
    {
      name: 'Ali Rajaii',
      profile: 'https://github.com/rajaii',
      img: './img/ali-rajaii.jpg'
    },
    {
      name: 'Shobhita Vaishnav',
      profile: 'https://github.com/shobhitav',
      img: './img/shobhita-vaishnav.jpg'
    },
    {
      name: 'Carlos Sanchez',
      profile: 'https://github.com/Lohrem',
      img: './img/carlos-sanchez.jpg'
    },
    {
      name: 'Mariana Huh',
      profile: 'https://github.com/marianahuh',
      img: './img/mariana-huh.jpg'
    },
    {
      name: 'Joshua Stevens',
      profile: 'https://github.com/JustSpokenCodes',
      img: './img/joshua-stevens.jpg'
    },
    {
      name: 'Oscar Valenzuela',
      profile: 'https://github.com/oscarv0101',
      img: './img/oscar-valenzuela.jpg'
    },
    {
      name: 'Shawn Henry',
      profile: 'https://github.com/shenry45',
      img: './img/shawn-henry.jpg'
    }
  ];

  return (
    <div className="page-wrap">
      <section>
        <h1>About Us</h1>
        <hr />
        <p>
        <b>Geia sas, aftí eínai i vivliothíki geitoniás!</b>...Sorry, Hello! This is Neighborhood Library. As people who have a Deep appreciation for printed books, we wanted to be able to speak to others about the mental adventures we go through everytime we dive back into our favorite book. When we looked around, we could never find someone else near us that either has read the same book we have or even have a care about the book that were obsessed about at the moment. We thought about it and decided that making an app that would allow book lovers of all ages and genres Finally be able to interact with each other and even be able to share their own books with others.
        
        This person is seeking a way to interact with locals who love books and share books with each other.
        </p>
        <br></br>
        <p> 
        Libraries are "places of <b>Freedom</b>” — <strong>Freedom</strong> to Choose, <strong>Freedom</strong> to Discover, <strong>Freedom</strong> to Question — <strong>Freedom</strong> to Borrow! In a world where very little is ever truly ‘free’, libraries are champions of <strong>Freedom</strong>." In this app, we provide a <b><em>Simple and Feature-Rich</em></b> solution for lending and borrowing books to/from fellow users.
        </p>
      </section>
      <section>
        <h2>Team</h2>
        <hr />
        <div className="team-cont">
          {
            team.map(memb => {
              return <div key={memb.name}>
                <img src={memb.img} alt="team member"/>
                <p>
                  <a href={memb.profile} target="_blank" rel="noopener noreferrer">
                    {memb.name}
                  </a>
                </p>
              </div>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default About;