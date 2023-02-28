import React, { useEffect } from "react";
import { Container, Section } from "../../GlobalStyles";
import { FiPhone, FiMapPin, FiMail, FiCalendar } from "react-icons/fi";

import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  StyledMap,
  ContentColumn,
} from "./ContactStyles.js";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const ContactContent = ({
  topLine,
  headline,
  description,
  email,
  address,
  inverse,
  reverse,
}) => {
 const IconStyle = {
   fontSize: "40px",
   fill: "white",
   borderRadius: "25%",
   padding: "10px",
 };

  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                <FiCalendar style={IconStyle} />
                {description}
              </Subtitle>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                <FiMail style={IconStyle} />

                {email}
              </Subtitle>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                
              <FiMapPin style={IconStyle} />

                {address}
              </Subtitle>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <StyledMap>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84492.7490355656!2d-73.66683056809855!3d45.48179486901259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9109da394e057%3A0x33db641673a6f64b!2s4008%20Notre-Dame%20St%20W%2C%20Montreal%2C%20QC%20H4C%201R1!5e0!3m2!1sen!2sca!4v1675478369050!5m2!1sen!2sca"
                width="100% !important"
                height="100% !important"
                style={{
                  border: "solid #C9D1DA 1px",
                  padding: "10px",
                  borderRadius: "20px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </StyledMap>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
