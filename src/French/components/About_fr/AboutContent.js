//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React, { useEffect } from "react";
import { Container, Section } from "../../../GlobalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  MainTitle,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "./AboutStyles.js";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const AboutContent = ({
  topLine,
  headline,
  description,
  img,
  alt,
  inverse,
  reverse,
}) => {
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
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
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
                {description}
              </Subtitle>
            </TextWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
