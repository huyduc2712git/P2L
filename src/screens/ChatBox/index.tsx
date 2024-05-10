import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  Button,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import MessageInput from "./components/MessageInput";
import ButtonAnimation from "@components/ButtonAnimation";

interface IChatBoxProps {}

interface Message {
  id: number;
  text: string;
  timestamp: Date;
}

const Chatbox = (props: IChatBoxProps) => {
  const {} = props ?? {};
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const textInputRef = useRef<TextInput>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const handleTextInputFocus = () => {
    setTimeout(() => {
      scrollToBottom();
    }, 100); // Delay for 100 milliseconds
  };

  const handleSend = (messageText: string) => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: messageText.trim(),
        timestamp: new Date()
      };
      setMessages((previousMessages) => [...previousMessages, newMessage]);
      setInputText("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View key={message.id} style={styles.messageBox}>
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.timeText}>{message.timestamp.toLocaleTimeString()}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <View style={styles.inputContainer}>
        <TextInput
          ref={textInputRef}
          value={inputText}
          onFocus={handleTextInputFocus}
          onChangeText={setInputText}
          style={styles.input}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={() => handleSend(inputText)} />
      </View> */}
      <MessageInput textValue={inputText} onChangeText={setInputText} onSendMessage={handleSend} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  messagesContainer: {
    flex: 1
  },
  messageBox: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 4,
    borderRadius: 10
  },
  messageText: {
    fontSize: 16
  },
  timeText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    textAlign: "right"
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 10
  }
});

export default Chatbox;
