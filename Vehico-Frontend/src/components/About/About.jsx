import React from 'react'
import { Typography, Box, Card } from '@mui/material';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';




const About = () => {
  return (
    <div className='px-5 lg:px-20'>

    <section className='pt-[2rem] lg:flex relative'>

      <div className='space-y-10 lg:w-[65%] filter'>
        <div className='box space-y-5 lg:sticky top-28'>
          <div>
            <Box sx={{ textAlign: 'left' }}>
        <Typography variant="h4" gutterBottom>
          About Vehico
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Vechico</strong> is a vehicle rental system designed to provide an easy, efficient, and user-friendly experience for both customers and vehicle providers. Whether you're looking for a car for a short trip or a truck for a long haul, <strong>Vechico</strong> has you covered. This system bridges the gap between vehicle owners (admins) and renters, allowing users to seamlessly book vehicles with the convenience of managing reservations online.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Features:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>User-Friendly Interface:</strong> The platform offers an intuitive interface for both vehicle owners and renters, making it simple to list or book vehicles.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Booking System:</strong> Renters can browse available vehicles, make reservations, and view vehicle details. Admins can manage booking requests by accepting or rejecting them based on availability.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Authentication and Authorization:</strong> The application uses JWT-based authentication, ensuring that user data and transactions are secure. Admins have the ability to manage vehicle listings and bookings, while renters can only make reservations.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Real-Time Availability:</strong> The platform allows admins to update vehicle availability in real-time, making sure that renters have access to up-to-date information.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Database Integration:</strong> <strong>Vechico</strong> uses MySQL for backend database management, ensuring fast, reliable, and scalable data storage for vehicle details, user accounts, and booking history.
            </Typography>
          </li>
        </ul>

        <div className='flex  gap-10 mt-2'>
        <Typography className='pt-2' variant="h6" gutterBottom>
          Tech Stack:
        </Typography>
          <img src="/icons8-react.svg" alt="" />
          <img src="/icons8-spring-boot-50.svg" alt="" />
          <img src="/icons8-java-50.svg" alt="" />
          <img src="/icons8-mysql-50.svg" alt="" />
          <img src="/icons8-github.svg" alt="" />
        </div>

        <Typography variant="body1" paragraph>
          <strong>Vechico</strong> is designed to cater to a broad range of users, from individuals who need a car for a few days to businesses that require multiple vehicles for longer durations.
        </Typography>
      </Box>
            
          </div>
        </div>
      </div>
      <div className='space-y-5 lg:w-[35%] filter lg:pl-10'>
        <Card className=' w-full h-full flex justify-center' sx={{ backgroundColor: '#000000', color: 'black',boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.8)', // Adds a shadow effect
          borderRadius: '16px', // Rounds the corners
          padding: '16px', // Adds internal spacing
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
          '&:hover': {
            transform: 'scale(1.05)', // Slightly enlarges the card on hover
            boxShadow: '0px 6px 30px rgba(0, 0, 0, 1)', // Intensifies the shadow on hover
          },
          }}>
          <div className='mt-1'>
          <div className='flex justify-center'>
          <img
              className="h-[10rem] w-[10rem] rounded-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D5603AQGhD-eFRpGxeA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723237459749?e=1739404800&v=beta&t=oacOxBEjcOFZnNlqS6w13VDsZBnDtyFVJ-DX3lk9ymY"
              alt="Profile"
          />
          </div>


          <Box className="flex flex-col items-center space-y-2 p-5 filter">
          <Typography variant='body1'>
            <strong>Abhishek Kumar Prasad</strong>
          </Typography>
            <Typography variant="body1" gutterBottom sx={{marginTop:"2px"}}>Connect with me:</Typography>
            <div className="flex space-x-8">
              <a href="https://www.linkedin.com/in/abhishek-kumar-prasad-41271b26b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-900 transition-colors duration-300">
                <FaLinkedin size={30} />
              </a>

              <a href="https://github.com/Abhishek-krPrasad" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-700 transition-colors duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/aviiishk" target="_blank" rel="noopener noreferrer"
              className="text-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-80 transition-opacity duration-300"
            >
              <FaInstagram size={30} className="text-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
            </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekkumarprasad03@gmail.com" className="text-white hover:text-gray-800 transition-colors duration-300">
                <FaEnvelope size={30} />
              </a>
            </div>
            <div className="bg-inherit p-6 rounded-lg shadow-lg text-white">
  <h2 className="text-base font-bold ">About Me</h2>
  <p className="text-sm leading-relaxed">
    Hi, I'm <strong>Abhishek Kumar Prasad</strong>, a passionate and dedicated Computer Application student with a keen interest in software development. 
    I'm currently exploring technologies like Java, Spring Boot, and React, aiming to become a skilled Java developer. 
    When I'm not coding, I enjoy learning about new tools, enhancing my skills, and working on projects that solve real-world problems.
  </p>
</div>
          </Box>



          </div>
        </Card>
      </div>       
    </section>
  </div>
  )
}

export default About