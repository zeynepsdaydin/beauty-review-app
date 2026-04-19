import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
// ÖNEMLİ: Eğer supabase.js dosyasını henüz oluşturmadıysan
// aşağıdaki satırı geçici olarak yorum satırı yapabilirsin (başına // koyarak)
// import { supabase } from './supabase';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleKayit = () => {
    // Şimdilik sadece butona basınca ne yazdığımızı görelim
    Alert.alert("Bilgi", `E-posta: ${email} \nŞifre: ${password}`);

    /* Supabase bağlantısı tamamlanınca burayı şöyle güncelleyeceğiz:
       const { data, error } = await supabase.auth.signUp({ email, password });
    */
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SkinCheck</Text>
      <Text style={styles.subtitle}>Kayıt Ol ve Deneyimlerini Paylaş</Text>

      <TextInput
        placeholder="E-posta adresin"
        style={styles.input}
        onChangeText={(metin) => setEmail(metin)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Şifren (En az 6 karakter)"
        style={styles.input}
        onChangeText={(metin) => setPassword(metin)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleKayit}>
        <Text style={styles.buttonText}>Hesap Oluştur</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6B6B",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF6B6B",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
