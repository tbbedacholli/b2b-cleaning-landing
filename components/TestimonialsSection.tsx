'use client'

import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import StarIcon from '@mui/icons-material/Star'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Facilities Manager',
    company: 'TechCorp Solutions',
    avatar: 'SJ',
    rating: 5,
    text: 'ProClean has transformed our office environment. Their attention to detail is exceptional, and our employees have noticed the difference immediately. Professional, reliable, and thorough.',
  },
  {
    name: 'Michael Chen',
    position: 'Operations Director',
    company: 'MedCenter Hospital',
    avatar: 'MC',
    rating: 5,
    text: 'Working in healthcare, cleanliness is critical. ProClean understands our strict requirements and consistently delivers hospital-grade cleaning that exceeds our expectations.',
  },
  {
    name: 'Lisa Rodriguez',
    position: 'Restaurant Owner',
    company: 'Bella Vista Restaurant',
    avatar: 'LR',
    rating: 5,
    text: 'The deep cleaning service for our kitchen is outstanding. They help us maintain health code compliance while keeping our dining area spotless. Highly recommended!',
  },
  {
    name: 'David Thompson',
    position: 'Property Manager',
    company: 'Downtown Office Complex',
    avatar: 'DT',
    rating: 5,
    text: 'Managing multiple office buildings, I need a cleaning service I can trust. ProClean handles everything professionally and their staff is courteous and efficient.',
  },
  {
    name: 'Jennifer Walsh',
    position: 'School Principal',
    company: 'Riverside Elementary',
    avatar: 'JW',
    rating: 5,
    text: 'Safety and cleanliness are our top priorities. ProClean uses child-safe products and maintains our school to the highest standards. Parents and staff are impressed.',
  },
  {
    name: 'Robert Kim',
    position: 'Manufacturing Manager',
    company: 'Industrial Solutions Inc.',
    avatar: 'RK',
    rating: 5,
    text: 'Our facility requires specialized industrial cleaning. ProClean has the expertise and equipment to handle our unique challenges while maintaining safety protocols.',
  },
]

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Box sx={{ py: 10, bgcolor: 'white' }} ref={ref}>
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
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}
          >
            Don't just take our word for it. Here's what business leaders across various industries say about our services.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    },
                    '&:before': {
                      content: '"""',
                      position: 'absolute',
                      top: -10,
                      left: 20,
                      fontSize: '4rem',
                      color: 'secondary.main',
                      fontFamily: 'serif',
                      opacity: 0.3,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: '#ffd700', fontSize: 20 }}
                        />
                      ))}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        color: 'text.secondary',
                      }}
                    >
                      {testimonial.text}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'primary.main',
                          width: 50,
                          height: 50,
                          fontSize: '1.2rem',
                          fontWeight: 600,
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {testimonial.position}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'secondary.main', fontWeight: 500 }}
                        >
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
              Join 500+ Satisfied Businesses
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Ready to experience the ProClean difference? Get your free quote today.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default TestimonialsSection