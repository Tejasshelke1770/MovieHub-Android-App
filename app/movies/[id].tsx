import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovieDetails } from "@/services/api";
import { icons } from "@/constants/icons";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}
const MovieINfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5 ">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-sm font-bold mt-2 text-light-200">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className=" bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className=" flex-col justify-center items-start mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2 ">
            <Text className="text-light-200 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie?.vote_count} votes)
            </Text>
          </View>
          <MovieINfo label="Overview" value={movie?.overview} />
          <MovieINfo
            label="Genres"
            value={movie?.genres.map((e) => e.name).join(" - ")}
          />
          <View className="flex-row justify-between items-center w-1/2 ">
            <MovieINfo
              label="Budget"
              value={movie?.budget ? `$${movie.budget / 1_000_000}M` : "N/A"}
            />
            <MovieINfo
              label="Revenue"
              value={movie?.budget ? `$${Math.round(movie?.revenue / 1_000_000)}M` : "N/A" }
            />
          </View>
          <MovieINfo
            label="Production Companies"
            value={movie?.production_companies.map((e) => e.name).join(" - ")}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={router.back}
        className="flex-row mx-5 py-3.5 bg-accent rounded-lg z-50 items-center justify-center gap-2 absolute bottom-5 right-0 left-0"
      >
        <Image source={icons.arrow} tintColor="#fff" className="rotate-180 " />
        <Text className="text-base font-semibold text-white">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
