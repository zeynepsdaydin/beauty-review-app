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
    if (!email || !password) {
      Alert.alert("Hata", "Lütfen e-posta ve şifre gir.");
      return;
    }

    Alert.alert("Bilgi", `E-posta: ${email} \nŞifre: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BeautyReview</Text>
      <Text style={styles.subtitle}>Kayıt Ol ve Deneyimlerini Paylaş</Text>

      {/* E-posta Giriş Alanı */}
      <Text style={styles.label}>E-posta</Text>
      <TextInput
        placeholder="örnek@mail.com" // Kutunun içinde görünecek yazı
        placeholderTextColor="#999" // Yazının rengi (gri tonlarında)
        style={styles.input}
        onChangeText={(metin) => setEmail(metin)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Şifre Giriş Alanı */}
      <Text style={styles.label}>Şifre</Text>
      <TextInput
        placeholder="En az 6 karakter giriniz"
        placeholderTextColor="#999"
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
    color: "#cb86ca",
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
    backgroundColor: "#d279cc",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "600",
    marginLeft: 5,
  },
});
