'use client';

import styled from 'styled-components';

interface FootNoteInterface {
  text: string;
}

function FootNote({ text }: FootNoteInterface) {
  return <FootNoteText>{text}</FootNoteText>;
}

export default FootNote;

const FootNoteText = styled.span`
  font-size: clamp(0.4em, 2vw, 0.9em);
`;
