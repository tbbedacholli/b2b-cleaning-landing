'use client'

import { Box, Container, Typography, Button, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import BusinessIcon from '@mui/icons-material/Business'
import VerifiedIcon from '@mui/icons-material/Verified'

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" gutterBottom>
                Professional
                <Box component="span" sx={{ color: '#00bcd4', display: 'block' }}>
                  Deep Cleaning
                </Box>
                for Your Business
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', opacity: 0.9 }}>
                Transform your workplace with our comprehensive B2B cleaning services. 
                We deliver spotless results that impress clients and boost employee morale.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#00bcd4',
                      '&:hover': { bgcolor: '#0097a7' },
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Get Free Quote
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': { borderColor: '#00bcd4', bgcolor: 'rgba(0,188,212,0.1)' },
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Our Services
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  { icon: <CleaningServicesIcon />, title: 'Deep Cleaning Experts', desc: '15+ years of professional experience' },
                  { icon: <BusinessIcon />, title: 'B2B Specialists', desc: 'Tailored solutions for businesses' },
                  { icon: <VerifiedIcon />, title: 'Fully Insured', desc: 'Licensed and bonded for your peace of mind' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          p: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 0,
        }}
      />
      
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(0,188,212,0.3)',
          zIndex: 0,
        }}
      />
    </Box>
  )
}

export default HeroSection