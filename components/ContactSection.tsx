'use client'

import { Box, Container, Typography, Grid, Card, CardContent, Button, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
  }

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: 'Call Us',
      info: '(555) 123-CLEAN',
      subInfo: 'Available 24/7 for emergencies',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: 'Email Us',
      info: 'info@procleanb2b.com',
      subInfo: 'Response within 2 hours',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
      title: 'Service Area',
      info: 'Nationwide Coverage',
      subInfo: 'Local teams in major cities',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
      title: 'Business Hours',
      info: 'Mon-Fri: 7AM-7PM',
      subInfo: 'Weekend service available',
    },
  ]

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
            Get Your Free Quote Today
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}
          >
            Ready to transform your workspace? Contact us for a customized cleaning solution that fits your business needs and budget.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                  Contact Information
                </Typography>
                
                <Grid container spacing={3}>
                  {contactInfo.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box
                            sx={{
                              color: 'secondary.main',
                              bgcolor: 'rgba(0,188,212,0.1)',
                              borderRadius: '50%',
                              p: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                              {item.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                              {item.info}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {item.subInfo}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                  Request a Quote
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Tell us about your cleaning needs"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Building size, frequency, special requirements, etc."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'linear-gradient(45deg, #1976d2, #00bcd4)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1565c0, #0097a7)',
                            },
                          }}
                        >
                          Get Free Quote
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactSection