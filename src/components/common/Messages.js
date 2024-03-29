import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';

export default ({ messages }) => {
  const [hideMessage, setHideMessage] = useState(false);

  return messages.map((msg, i) => (
    <Message
      key={i}
      onDismiss={() => setHideMessage(true)}
      hidden={hideMessage}
      color={msg.color}
      header={msg.header}
      content={msg.content}
    />
  ));
};
