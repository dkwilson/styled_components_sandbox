import React from "react";
import styled from "styled-components";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati
        laboriosam autem ratione sit voluptate tempora expedita nisi deserunt
        velit. Non, nemo quidem saepe doloribus placeat nam vitae mollitia
        accusantium.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${(props) => `background:${props.theme.secondaryColor}`};
  ${(props) => `color:${props.theme.primaryColor}`};
`;
