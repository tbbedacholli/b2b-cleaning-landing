'use client'

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BusinessIcon from '@mui/icons-material/Business'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import SchoolIcon from '@mui/icons-material/School'
import FactoryIcon from '@mui/icons-material/Factory'
import StorefrontIcon from '@mui/icons-material/Storefront'

const services = [
  {
    icon: <BusinessIcon sx={{ fontSize: 48 }} />,
    title: 'Office Buildings',
    description: 'Complete office cleaning including workstations, conference rooms, and common areas.',
    features: ['Daily maintenance', 'Deep carpet cleaning', 'Window cleaning', 'Sanitization']
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    title: 'Medical Facilities',
    description: 'Specialized cleaning for healthcare environments with strict hygiene protocols.',
    features: ['Medical-grade disinfection', 'Biohazard cleanup', 'OSHA compliance', '24/7 availability']
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 48 }} />,
    title: 'Restaurants & Food Service',
    description: 'Kitchen deep cleaning and dining area maintenance for food service businesses.',
    features: ['Kitchen equipment cleaning', 'Grease trap maintenance', 'Health code compliance', 'Floor care']
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Educational Facilities',
    description: 'Safe and thorough cleaning for schools, universities, and training centers.',
    features: ['Classroom sanitization', 'Playground cleaning', 'Gym maintenance', 'Child-safe products']
  },
  {
    icon: <FactoryIcon sx={{ fontSize: 48 }} />,
    title: 'Industrial Facilities',
    description: 'Heavy-duty cleaning for warehouses, factories, and manufacturing plants.',
    features: ['Equipment cleaning', 'Pressure washing', 'Hazmat handling', 'Safety compliance']
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 48 }} />,
    title: 'Retail Spaces',
    description: 'Maintain pristine shopping environments that attract and retain customers.',
    features: ['Floor polishing', 'Display cleaning', 'Restroom maintenance', 'Entrance care']
  },
]

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 2, color: 'primary.main' }}
          >
            Our Specialized Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}
          >
            We provide comprehensive cleaning solutions tailored to your industry's specific needs and regulations.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {service.icon}
                    </Box>
                    
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ textAlign: 'left' }}>
                      {service.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                            color: 'text.secondary',
                            '&:before': {
                              content: '"✓"',
                              color: 'secondary.main',
                              fontWeight: 'bold',
                              mr: 1,
                            },
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesSection