# Sidechat
#A browser sidebar component that includes a chat feature.
In the provided code, the logic and approaches used to achieve real-time messaging are as follows:

State Management: The useState hook is used to manage the state of chat messages. The messages state is initialized as an empty array and represents the list of chat messages displayed in the sidebar.

Sending Messages: The sendMessage function is responsible for sending new messages. It is an asynchronous function that takes the message as a parameter. Inside the function, a request is made to an API endpoint (specified by apiUrl) using the fetch function. The message is sent as JSON data in the request body.

Updating Messages State: Upon successfully sending a message, the response from the API is received and parsed as JSON data. The sent message and the received message are created as objects with properties such as text, sender, and timestamp. The setMessages function is used to update the messages state by appending the sent and received messages to the existing list.

Displaying Messages: The chat interface is rendered using the messages state. The messages.map function is used to iterate over the messages array and generate a <div> element for each message. The key prop is set to the index of the message for efficient rendering. Inside each message <div>, the message content is displayed, including the sender's avatar, the sender's name, the message text, and the timestamp.

Input and Send Button: The input field and send button allow the user to type and send messages. The onKeyDown event listener is attached to the input field to detect when the Enter key is pressed. If the Enter key is pressed and the input value is not empty, the sendMessage function is called with the input value, and the input field is cleared. Similarly, the send button also triggers the sendMessage function when clicked.

Real-Time Aspect: The real-time aspect is not explicitly implemented in the provided code. It assumes that the API endpoint used for sending messages is responsible for handling real-time communication. You would need to implement the server-side functionality to receive and handle incoming messages in real-time and send appropriate responses back to the client.
 ![2023-05-30 (1)](https://github.com/Ayush-1205/Sidechat/assets/101936254/b7127b71-7139-470a-9ffe-4dab4895ca2b)
Theme Adaptation Documentation:

The theme adaptation is achieved through React state management and CSS variables. The component has a theme state that represents the selected theme, which can be either "light" or "dark". Based on the value of the theme state, the appropriate CSS class is added to the parent container using template literals. For example, if the theme is "dark", the dark-theme class is added, which applies the dark theme styles defined in CSS.

CSS variables are used to define the theme-specific colors. In the CSS file (Sidebar.css), the CSS properties are defined using the CSS variables. The CSS variables are then assigned different color values based on the selected theme.

Code Highlighting Documentation:

Code highlighting is achieved using the react-syntax-highlighter library, specifically the Prism component. When a message object has the code property set to true, the message text is wrapped inside the SyntaxHighlighter component. The SyntaxHighlighter component takes the programming language (in this case, "javascript") and the desired code highlighting style (in this case, solarizedlight) as props. The message text is then rendered within the SyntaxHighlighter component, which applies syntax highlighting to the code.

This allows specific messages to be displayed with code syntax highlighting while other messages are displayed as plain text.

Please note that this is a simplified implementation, and you may need to adapt it to fit your specific use case or requirements.

