import React, { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LiquidSwipe from "../components/LiquidSwipe";
import Button from "../components/shared/button/Button";
import Card from "../components/shared/Card";
import HStack from "../components/shared/HStack";
import { Image } from "../components/shared/image";
import { FlatList } from "../components/shared/list";
import SafeAreaView from "../components/shared/SafeAreaView";
import { Body1, Body2, Title } from "../components/shared/typography";
import View from "../components/shared/View";

interface EProps {}

const E: React.FC<EProps> = (props) => {
  return <LiquidSwipe />;
};
export default E;
