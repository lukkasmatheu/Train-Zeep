import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import "../global.css";

export default function Home() {
  return (
    <View className="flex-1 items-center bg-slate-600 ">
      <Text className="font-light m-8 text-xl text-center text-white ">
        TREINO
      </Text>
      <View className="flex-1 w-11/12 max-h-72 bg-gray-900 rounded-md">
        <Text className="font-bold m-1 text-base text-left text-white ">
          Historico de treino
        </Text>
        <View className="flex-1 flex-row">
          <View className="border-r m-2 pr-3 h-16 border-slate-300">
            <Text className=" font-bold text-xl text-white">
              5
            </Text>
            <Text className=" text-white">
              Total de treinos esta 
            </Text>
            <Text  className=" text-white">semana</Text>
          </View>
          <View className="m-2 h-12" >
            <Text className="font-bold text-xl text-white">
              165
            </Text>
            <Text className=" text-white">
              Tempo Total(Min)
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-col">
          <View className="h-1/5 flex-1 flex-row justify-between items-center bg-slate-600 rounded-md m-3 ">
            <Text className="text-white ml-2">
              Skate
            </Text>
            <View>
              <Text className="text-white text-sm mr-0">
                7.76KM
              </Text>
              <Text className="text-white text-xs mr-2">
                40:44 Min
              </Text>
            </View>
          </View>
          <View className="flex-1 flex-row justify-between items-center bg-slate-600 rounded-md m-3 ">
            <Text className="text-white ml-2">
              Caminhada
            </Text>
            <View>
            <Text className="text-white text-sm mr-0">
              4.44KM
            </Text>
            <Text className="text-white text-xs mr-2">
              33:18 Min
            </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-1 w-11/12 max-h-28 bg-gray-900 rounded-md mt-3 p-2">
        <Text className="font-bold m-1 text-base text-left text-white ">
          Treinador Zeep
        </Text>
        <Text className="text-slate-600">
          Junte-se ao nosso plano de treinamento 
        </Text>
        <Text className="text-slate-600">
          para orientação personalizada e seja o seu melhor!
        </Text>
        <Text className="text-fuchsia-800">
          Personalize um Plano >
        </Text>
      </View>

      <View className="flex-1 w-11/12 max-h-40 bg-gray-900 rounded-md mt-3">
        <Text className="font-bold m-1 text-base text-left text-white ">
          Status de Treino
        </Text>
        <View className="flex-1 flex-col">
          <View className="flex-1 flex-row justify-between items-center bg-slate-600 rounded-md m-3 ">
            <Text className="text-white ml-2">
              VO2 Máx
            </Text>
            <Text className="text-white mr-5">
              --
            </Text>
          </View>
          <View className="flex-1 flex-row justify-between items-center  bg-slate-600 rounded-md m-3 ">
            <Text className="text-white ml-2">
              Carga de Treino
            </Text>
            <Text className="text-white mr-5">
              --
            </Text>
          </View>
        </View>

        </View>

      {/* <TouchableOpacity className="bg-yellow-700 p-4 rounded-lg mt-4 ">
        <Text className="text-white font-bold ">Click-Me</Text>
      </TouchableOpacity> */}

      <StatusBar style="auto" />
    </View>
  );
}
