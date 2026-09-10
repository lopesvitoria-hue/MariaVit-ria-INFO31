import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartaoMemoria } from "../components/CartaoMemoria";
import { MEMORIAS } from "../src/dominio";

export default function Index() {
  const [somenteAtencao, setSomenteAtencao] = useState<boolean>(false);
  const MEMORIASVisiveis = somenteAtencao
    ? MEMORIAS.filter((indicador) => indicador.situacao === "atencao")
    : MEMORIAS;

  function alternarFiltro(): void { setSomenteAtencao((valorAtual) => !valorAtual); }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <Image
            source={require("../assets/images/painel-didatico.png")}
            style={styles.imagem}
            accessibilityIgnoresInvertColors
          />
          <View style={styles.textosCabecalho}>
            <Text style={styles.marca}>IFMA · PROTÓTIPO DIDÁTICO</Text>
            <Text style={styles.titulo}>Mem�rias Quilombolas</Text>
            <Text style={styles.introducao}>MEMORIAS simulados de permanência estudantil.</Text>
            <Text style={styles.aviso}>DADOS FICTÍCIOS E AGREGADOS · Não representam uma turma real.</Text>
          </View>
        </View>

        <View style={styles.controles}>
          <Pressable
            onPress={alternarFiltro}
            style={({ pressed }) => [
              styles.botao,
              somenteAtencao && styles.botaoAtivo,
              pressed && styles.botaoPressionado
            ]}
            accessibilityRole="button"
            accessibilityLabel={somenteAtencao ? "Mostrar todos os MEMORIAS" : "Filtrar apenas MEMORIAS em atenção"}
            accessibilityState={{ disabled: false }}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text style={[styles.textoBotao, somenteAtencao && styles.textoBotaoAtivo]}>
              {somenteAtencao ? "Mostrar todos" : "Somente atenção"}
            </Text>
          </Pressable>
          <View style={styles.contagemBox}>
            <Text style={styles.contagem} accessibilityLabel={`${MEMORIASVisiveis.length} MEMORIAS exibidos`}>
              {MEMORIASVisiveis.length} exibidos
            </Text>
          </View>
        </View>

        <View style={styles.lista}>
          {MEMORIASVisiveis.map((indicador) => (
            <CartaoMemoria key={indicador.id} indicador={indicador} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#F8FAFC" },
  conteudo: { padding: 20, paddingBottom: 36, width: "100%", maxWidth: 720, alignSelf: "center" },
  cabecalho: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 12, 
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    borderColor: "#E2E8F0",
    borderWidth: 1
  },
  imagem: { width: 60, height: 60, borderRadius: 8 },
  textosCabecalho: { flex: 1 },
  marca: { color: "#B91C1C", fontSize: 11, fontWeight: "700" },
  titulo: { color: "#166534", fontSize: 22, fontWeight: "800", marginTop: 4 },
  introducao: { color: "#334155", fontSize: 13, lineHeight: 18, marginTop: 4 },
  aviso: { color: "#64748B", fontSize: 11, lineHeight: 16, marginTop: 4 },
  controles: { 
    alignItems: "center", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    gap: 12,
    marginTop: 16 
  },
  botao: { 
    backgroundColor: "#FFFFFF", 
    borderColor: "#166534", 
    borderRadius: 999, 
    borderWidth: 2, 
    paddingHorizontal: 16, 
    paddingVertical: 12,
    minHeight: 48,
    minWidth: 48,
    justifyContent: "center"
  },
  botaoAtivo: { backgroundColor: "#166534" },
  botaoPressionado: { opacity: 0.7, backgroundColor: "#0D4620" },
  textoBotao: { color: "#166534", fontSize: 14, fontWeight: "700" },
  textoBotaoAtivo: { color: "#FFFFFF" },
  contagemBox: { justifyContent: "center" },
  contagem: { color: "#64748B", fontSize: 14, fontWeight: "600" },
  lista: { marginTop: 16, gap: 8 },
});
