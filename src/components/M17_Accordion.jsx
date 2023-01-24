import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography  } from '@mui/material'
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material/';

export const M17_Accordion = () => {
  const [expanded, setExpanded] = useState(false);

  const onChange = (isExpanded, panel) => {
    setExpanded(isExpanded? panel : false)
  }
  console.log(expanded)


  return (
  <>
    <Accordion 
      expanded={expanded === 'panel1'}
      onChange={(e, isExpanded) => onChange(isExpanded, 'panel1')}  
      sx={{backgroundColor:'#858585'}}>
      <AccordionSummary
        id='panel1-header'
        aria-controls='panel1-content'
        expandIcon={<ExpandMoreIcon/>}      
      >
        <Typography variant='h6'>Acordeón 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, non incidunt repudiandae nesciunt inventore doloribus totam ut ad distinctio laboriosam.
        </Typography>
      </AccordionDetails>
    </Accordion>


    {/* Acordeón 2 */}
    <Accordion 
      expanded={expanded === 'panel2'}  
      onChange={(e, isExpanded) => onChange(isExpanded, 'panel2')}
      sx={{backgroundColor:'#858585'}}>
      <AccordionSummary
        id='panel2-header'
        aria-controls='panel2-content'
        expandIcon={<ExpandMoreIcon/>}      
      >
        <Typography variant='h6'>Acordeón 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, non incidunt repudiandae nesciunt inventore doloribus totam ut ad distinctio laboriosam.
        </Typography>
      </AccordionDetails>
    </Accordion>


    {/* Acordeón 3 */}
    <Accordion 
      expanded={expanded === 'panel3'} 
      onChange={(e, isExpanded) => onChange(isExpanded, 'panel3')}
      sx={{backgroundColor:'#858585'}}>
      <AccordionSummary
        id='panel3-header'
        aria-controls='panel3-content'
        expandIcon={<ExpandMoreIcon/>}      
      >
        <Typography variant='h6'>Acordeón 3</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, non incidunt repudiandae nesciunt inventore doloribus totam ut ad distinctio laboriosam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    </>
  )
}
