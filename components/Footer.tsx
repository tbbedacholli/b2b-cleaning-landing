'use client'

import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'Office Cleaning',
      'Medical Facilities',
      'Restaurant Cleaning',
      'Industrial Cleaning',
      'Retail Spaces',
      'Educational Facilities',
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Insurance & Bonding',
      'Service Areas',
      'Contact Us',
    ],
    resources: [
      'Cleaning Checklist',
      'Industry Standards',
      'Safety Protocols',
      'Green Cleaning',
      'Emergency Services',
      'Maintenance Tips',
    ],
  }

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CleaningServicesIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  ProClean B2B
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#cccccc' }}>
                Your trusted partner for professional deep cleaning services. 
                We help businesses maintain pristine environments that impress 
                clients and boost employee productivity.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      sx={{
                        color: '#cccccc',
                        '&:hover': { color: 'secondary.main' },
                        transition: 'color 0.3s ease',
                      }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Services Links */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'secondary.main' }}>
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.services.map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      '&:hover': { color: 'white', textDecoration: 'underline' },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'secondary.main' }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.company.map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      '&:hover': { color: 'white', textDecoration: 'underline' },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Resources Links */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'secondary.main' }}>
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.resources.map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      '&:hover': { color: 'white', textDecoration: 'underline' },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'secondary.main' }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  (555) 123-CLEAN
                </Typography>
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  info@procleanb2b.com
                </Typography>
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  Available 24/7 for emergencies
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: '#333' }} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: '#cccccc' }}>
              © {currentYear} ProClean B2B. All rights reserved.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { color: 'white', textDecoration: 'underline' },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { color: 'white', textDecoration: 'underline' },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { color: 'white', textDecoration: 'underline' },
                }}
              >
                Cookie Policy
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer