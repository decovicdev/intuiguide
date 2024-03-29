import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC, useCallback, useRef, useState } from "react";
import MapView, { Geojson } from "react-native-maps";

import Button from "../../components/shared/button/Button";
import ButtonWithText from "../../components/shared/button/ButtonWithText";
import Card from "../../components/shared/Card";
import { Image } from "../../components/shared/image";
import ImageBg from "../../components/shared/image/ImageBg";
import Indicator from "../../components/shared/Indicator";
import FormField from "../../components/shared/input/FormField";
import { FlatList } from "../../components/shared/list";
import SafeAreaView from "../../components/shared/SafeAreaView";
import { Body1, Caption1, Caption2 } from "../../components/shared/typography";
import View from "../../components/shared/View";
import { HomeStackScreenProps } from "../../types/navigation";

// const myPlace = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         name: "Bourse",
//         cartodb_id: 2,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:18.682Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.339999, 48.87196],
//               [2.34789, 48.870689],
//               [2.35433, 48.869308],
//               [2.350979, 48.863411],
//               [2.330292, 48.868294],
//               [2.328211, 48.86972],
//               [2.328072, 48.869923],
//               [2.339999, 48.87196],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Temple",
//         cartodb_id: 3,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:24.060Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.36236, 48.867905],
//               [2.364764, 48.866436],
//               [2.366694, 48.86319],
//               [2.368454, 48.85582],
//               [2.364335, 48.856441],
//               [2.361631, 48.857262],
//               [2.358626, 48.858757],
//               [2.356825, 48.860111],
//               [2.353391, 48.861214],
//               [2.350172, 48.862034],
//               [2.354249, 48.869286],
//               [2.36236, 48.867905],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Panthéon",
//         cartodb_id: 5,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:34.699Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.351799, 48.83675],
//               [2.345489, 48.837601],
//               [2.336462, 48.839622],
//               [2.342576, 48.850258],
//               [2.344199, 48.85376],
//               [2.3445, 48.854038],
//               [2.346859, 48.853298],
//               [2.350169, 48.851997],
//               [2.3548, 48.850788],
//               [2.36098, 48.84861],
//               [2.366, 48.844997],
//               [2.36493, 48.844379],
//               [2.361839, 48.84],
//               [2.351799, 48.83675],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Luxembourg",
//         cartodb_id: 6,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:40.774Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.316469, 48.846851],
//               [2.31904, 48.847851],
//               [2.32412, 48.850311],
//               [2.32704, 48.851608],
//               [2.32866, 48.851952],
//               [2.331599, 48.856339],
//               [2.33386, 48.85918],
//               [2.337499, 48.85849],
//               [2.340592, 48.85675],
//               [2.342512, 48.855247],
//               [2.344465, 48.853992],
//               [2.34425, 48.853767],
//               [2.342639, 48.850349],
//               [2.33652, 48.83963],
//               [2.31999, 48.8451],
//               [2.316469, 48.846851],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Palais-Bourbon",
//         cartodb_id: 7,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:45.091Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.309531, 48.84581],
//               [2.307342, 48.847153],
//               [2.289877, 48.858192],
//               [2.294769, 48.861862],
//               [2.300219, 48.863499],
//               [2.31833, 48.863838],
//               [2.331462, 48.859676],
//               [2.333844, 48.85918],
//               [2.33159, 48.856258],
//               [2.33041, 48.854424],
//               [2.329295, 48.852673],
//               [2.328479, 48.851826],
//               [2.327106, 48.851601],
//               [2.319274, 48.847801],
//               [2.313651, 48.845909],
//               [2.311355, 48.845215],
//               [2.309531, 48.84581],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Élysée",
//         cartodb_id: 8,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:51.084Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.30155, 48.864601],
//               [2.299869, 48.865131],
//               [2.298799, 48.86869],
//               [2.297299, 48.871151],
//               [2.295539, 48.87326],
//               [2.29457, 48.873192],
//               [2.294029, 48.873669],
//               [2.294399, 48.87429],
//               [2.295409, 48.874317],
//               [2.297769, 48.87775],
//               [2.297639, 48.878029],
//               [2.298049, 48.87846],
//               [2.298799, 48.87825],
//               [2.309009, 48.880459],
//               [2.316609, 48.88134],
//               [2.32721, 48.88345],
//               [2.326849, 48.875908],
//               [2.326611, 48.875404],
//               [2.326976, 48.873825],
//               [2.326869, 48.873329],
//               [2.32629, 48.872597],
//               [2.326505, 48.872471],
//               [2.325819, 48.869534],
//               [2.325152, 48.869392],
//               [2.32526, 48.869019],
//               [2.320769, 48.863098],
//               [2.31828, 48.863811],
//               [2.30167, 48.863522],
//               [2.30155, 48.864601],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Opéra",
//         cartodb_id: 9,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:00.221Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.339599, 48.882011],
//               [2.34952, 48.883781],
//               [2.34987, 48.880692],
//               [2.349209, 48.87888],
//               [2.349, 48.87722],
//               [2.348139, 48.87566],
//               [2.34785, 48.873871],
//               [2.34789, 48.870689],
//               [2.34004, 48.87196],
//               [2.32579, 48.869572],
//               [2.326519, 48.872471],
//               [2.326309, 48.872589],
//               [2.32688, 48.873341],
//               [2.326979, 48.873779],
//               [2.32663, 48.875439],
//               [2.32682, 48.87595],
//               [2.32717, 48.883419],
//               [2.327929, 48.883621],
//               [2.32948, 48.884651],
//               [2.337406, 48.882271],
//               [2.339599, 48.882011],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Enclos-St-Laurent",
//         cartodb_id: 10,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:05.756Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.368755, 48.884079],
//               [2.369142, 48.883289],
//               [2.370213, 48.882637],
//               [2.370257, 48.878632],
//               [2.370814, 48.878124],
//               [2.370601, 48.87756],
//               [2.376952, 48.872108],
//               [2.372917, 48.870644],
//               [2.364205, 48.86779],
//               [2.363477, 48.867226],
//               [2.362404, 48.867905],
//               [2.354293, 48.869286],
//               [2.347941, 48.870728],
//               [2.347812, 48.873943],
//               [2.348155, 48.875751],
//               [2.348971, 48.877277],
//               [2.349272, 48.879223],
//               [2.349873, 48.880692],
//               [2.349486, 48.883797],
//               [2.359227, 48.884472],
//               [2.364806, 48.884361],
//               [2.368755, 48.884079],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Popincourt",
//         cartodb_id: 11,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:14.753Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.383175, 48.867115],
//               [2.383776, 48.86607],
//               [2.387465, 48.862823],
//               [2.389654, 48.858444],
//               [2.39223, 48.857571],
//               [2.394321, 48.856548],
//               [2.398398, 48.85133],
//               [2.399214, 48.848709],
//               [2.399064, 48.848103],
//               [2.395899, 48.848351],
//               [2.384291, 48.85017],
//               [2.379999, 48.850483],
//               [2.371544, 48.852459],
//               [2.370257, 48.853222],
//               [2.369184, 48.853081],
//               [2.366737, 48.86319],
//               [2.36472, 48.866409],
//               [2.363477, 48.867256],
//               [2.364205, 48.86779],
//               [2.376866, 48.872108],
//               [2.383175, 48.867115],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Gobelins",
//         cartodb_id: 13,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:25.726Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.342039, 48.838322],
//               [2.345431, 48.837605],
//               [2.348927, 48.837067],
//               [2.35189, 48.836731],
//               [2.36193, 48.840031],
//               [2.36493, 48.844379],
//               [2.365959, 48.844997],
//               [2.38856, 48.826481],
//               [2.385269, 48.825298],
//               [2.37881, 48.82148],
//               [2.363339, 48.816132],
//               [2.356799, 48.816441],
//               [2.3544, 48.817501],
//               [2.351669, 48.817989],
//               [2.346839, 48.81641],
//               [2.34405, 48.816441],
//               [2.3441, 48.817631],
//               [2.34459, 48.819382],
//               [2.343939, 48.820278],
//               [2.34242, 48.821461],
//               [2.34146, 48.823658],
//               [2.34165, 48.826408],
//               [2.34131, 48.831429],
//               [2.34111, 48.831947],
//               [2.342039, 48.838322],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Observatoire",
//         cartodb_id: 14,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:30.531Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.301464, 48.825428],
//               [2.321032, 48.841503],
//               [2.321547, 48.840996],
//               [2.324594, 48.843651],
//               [2.336396, 48.839695],
//               [2.342105, 48.838284],
//               [2.341117, 48.831982],
//               [2.341504, 48.828793],
//               [2.341632, 48.8256],
//               [2.341504, 48.823254],
//               [2.34249, 48.821304],
//               [2.344036, 48.820118],
//               [2.344551, 48.819355],
//               [2.344164, 48.817574],
//               [2.344078, 48.816502],
//               [2.33571, 48.816811],
//               [2.332878, 48.818478],
//               [2.301464, 48.825428],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Vaugirard",
//         cartodb_id: 15,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:35.322Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.292365, 48.827492],
//               [2.277001, 48.833763],
//               [2.274255, 48.830429],
//               [2.275027, 48.829807],
//               [2.272797, 48.82896],
//               [2.270564, 48.828114],
//               [2.267818, 48.828171],
//               [2.267303, 48.831108],
//               [2.27065, 48.833591],
//               [2.269191, 48.835342],
//               [2.266188, 48.834724],
//               [2.264127, 48.835175],
//               [2.278204, 48.849014],
//               [2.287644, 48.855679],
//               [2.289963, 48.858276],
//               [2.309274, 48.845852],
//               [2.311335, 48.845287],
//               [2.316483, 48.846813],
//               [2.320003, 48.845173],
//               [2.324552, 48.843594],
//               [2.321633, 48.841049],
//               [2.320948, 48.841618],
//               [2.301464, 48.825512],
//               [2.292365, 48.827492],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Passy",
//         cartodb_id: 16,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:40.880Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.28007, 48.878292],
//               [2.294939, 48.873859],
//               [2.297387, 48.871193],
//               [2.299039, 48.868427],
//               [2.29991, 48.865269],
//               [2.301571, 48.864574],
//               [2.3018, 48.863361],
//               [2.29408, 48.86166],
//               [2.28893, 48.85759],
//               [2.28601, 48.854321],
//               [2.277429, 48.847988],
//               [2.26404, 48.835121],
//               [2.257859, 48.835678],
//               [2.253909, 48.839298],
//               [2.25477, 48.845398],
//               [2.2503, 48.845509],
//               [2.241719, 48.848328],
//               [2.2273, 48.84856],
//               [2.225929, 48.85545],
//               [2.23159, 48.86652],
//               [2.23932, 48.870468],
//               [2.2467, 48.876339],
//               [2.25511, 48.874199],
//               [2.258199, 48.88052],
//               [2.28007, 48.878292],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Batignolles-Monceau",
//         cartodb_id: 17,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:46.239Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.27999, 48.878361],
//               [2.28325, 48.882771],
//               [2.29185, 48.88842],
//               [2.29768, 48.889648],
//               [2.306185, 48.895111],
//               [2.314081, 48.898159],
//               [2.32188, 48.900612],
//               [2.33013, 48.900799],
//               [2.32562, 48.887589],
//               [2.32721, 48.88345],
//               [2.31691, 48.881302],
//               [2.30867, 48.880402],
//               [2.29807, 48.878151],
//               [2.29502, 48.873909],
//               [2.27999, 48.878361],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Butte-Montmartre",
//         cartodb_id: 18,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:52.398Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.370379, 48.900719],
//               [2.370379, 48.896709],
//               [2.37184, 48.895359],
//               [2.370289, 48.894459],
//               [2.367081, 48.887592],
//               [2.36663, 48.886604],
//               [2.36472, 48.884411],
//               [2.358789, 48.884411],
//               [2.34952, 48.883678],
//               [2.339739, 48.88187],
//               [2.337254, 48.882286],
//               [2.32953, 48.88443],
//               [2.32792, 48.883526],
//               [2.327192, 48.883415],
//               [2.325603, 48.887619],
//               [2.33021, 48.900829],
//               [2.353209, 48.901279],
//               [2.370379, 48.900719],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Buttes-Chaumont",
//         cartodb_id: 19,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:58.058Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.408749, 48.877857],
//               [2.402309, 48.875999],
//               [2.395255, 48.875259],
//               [2.39021, 48.875549],
//               [2.387719, 48.874531],
//               [2.386519, 48.874649],
//               [2.38472, 48.873859],
//               [2.376819, 48.872219],
//               [2.370379, 48.87809],
//               [2.37021, 48.882771],
//               [2.36892, 48.883339],
//               [2.368669, 48.884132],
//               [2.364742, 48.884403],
//               [2.366781, 48.886688],
//               [2.368348, 48.890202],
//               [2.370289, 48.894508],
//               [2.37175, 48.89547],
//               [2.370279, 48.896648],
//               [2.370379, 48.90078],
//               [2.3769, 48.900269],
//               [2.38849, 48.900661],
//               [2.392009, 48.899818],
//               [2.39381, 48.898239],
//               [2.39725, 48.88588],
//               [2.401879, 48.88176],
//               [2.4066, 48.880119],
//               [2.408749, 48.877857],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Louvre",
//         cartodb_id: 1,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:13.177Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.320769, 48.863037],
//               [2.325229, 48.868938],
//               [2.325149, 48.869419],
//               [2.328018, 48.869949],
//               [2.330302, 48.868286],
//               [2.350944, 48.863407],
//               [2.347351, 48.857124],
//               [2.34691, 48.856972],
//               [2.345966, 48.855373],
//               [2.344529, 48.854012],
//               [2.3424, 48.855247],
//               [2.340469, 48.8568],
//               [2.33725, 48.858467],
//               [2.331459, 48.85968],
//               [2.320769, 48.863037],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Hôtel-de-Ville",
//         cartodb_id: 4,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:36:29.259Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.36465, 48.845989],
//               [2.360899, 48.84864],
//               [2.35467, 48.850849],
//               [2.35013, 48.851978],
//               [2.34695, 48.853298],
//               [2.344551, 48.854027],
//               [2.345966, 48.855396],
//               [2.346986, 48.856964],
//               [2.347329, 48.857147],
//               [2.350169, 48.86203],
//               [2.353299, 48.86124],
//               [2.35678, 48.860161],
//               [2.358579, 48.858749],
//               [2.36167, 48.857258],
//               [2.364329, 48.856407],
//               [2.36836, 48.855869],
//               [2.3692, 48.85281],
//               [2.366299, 48.846958],
//               [2.36465, 48.845989],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Reuilly",
//         cartodb_id: 12,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:37:20.571Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.414499, 48.846809],
//               [2.41252, 48.836529],
//               [2.409609, 48.83427],
//               [2.41407, 48.833698],
//               [2.42214, 48.83585],
//               [2.420249, 48.840588],
//               [2.419299, 48.84206],
//               [2.419989, 48.84359],
//               [2.42179, 48.844547],
//               [2.42445, 48.841778],
//               [2.438359, 48.840588],
//               [2.43922, 48.844547],
//               [2.44085, 48.84444],
//               [2.44076, 48.845959],
//               [2.4466, 48.845901],
//               [2.44634, 48.84494],
//               [2.455519, 48.844097],
//               [2.46334, 48.842232],
//               [2.46977, 48.836529],
//               [2.46909, 48.834148],
//               [2.465219, 48.831497],
//               [2.46428, 48.827599],
//               [2.466, 48.827259],
//               [2.464789, 48.822968],
//               [2.462559, 48.819458],
//               [2.45887, 48.81715],
//               [2.453889, 48.816978],
//               [2.44857, 48.818157],
//               [2.4375, 48.818439],
//               [2.43733, 48.81963],
//               [2.431919, 48.822628],
//               [2.42763, 48.82415],
//               [2.421959, 48.824211],
//               [2.419729, 48.8241],
//               [2.41733, 48.8246],
//               [2.41107, 48.825001],
//               [2.40669, 48.826981],
//               [2.403509, 48.8293],
//               [2.40111, 48.829689],
//               [2.39562, 48.828049],
//               [2.390719, 48.827198],
//               [2.38858, 48.826469],
//               [2.364539, 48.84613],
//               [2.366429, 48.847031],
//               [2.36918, 48.85313],
//               [2.370379, 48.85313],
//               [2.371544, 48.852417],
//               [2.38017, 48.850368],
//               [2.384459, 48.850079],
//               [2.39596, 48.848328],
//               [2.414499, 48.846809],
//             ],
//           ],
//         ],
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         name: "Ménilmontant",
//         cartodb_id: 20,
//         created_at: "2013-02-26T07:07:16.384Z",
//         updated_at: "2013-02-26T18:38:05.143Z",
//       },
//       geometry: {
//         type: "MultiPolygon",
//         coordinates: [
//           [
//             [
//               [2.4133, 48.865269],
//               [2.41414, 48.859051],
//               [2.41398, 48.853809],
//               [2.414675, 48.852573],
//               [2.41527, 48.851028],
//               [2.41441, 48.846802],
//               [2.39904, 48.848099],
//               [2.3993, 48.848789],
//               [2.39835, 48.851261],
//               [2.39441, 48.856522],
//               [2.38965, 48.858471],
//               [2.38737, 48.862961],
//               [2.3835, 48.866169],
//               [2.38319, 48.867142],
//               [2.37682, 48.872231],
//               [2.38497, 48.873959],
//               [2.38651, 48.874691],
//               [2.38789, 48.874531],
//               [2.39037, 48.875542],
//               [2.39529, 48.87521],
//               [2.40221, 48.87595],
//               [2.40858, 48.87785],
//               [2.41097, 48.87431],
//               [2.41338, 48.87109],
//               [2.4133, 48.865269],
//             ],
//           ],
//         ],
//       },
//     },
//   ],
// } as const

interface CreateItineraryProps
  extends HomeStackScreenProps<"CreateItinerary"> {}

const CreateItinerary: React.FC<CreateItineraryProps> = (props) => {
  const { navigation, route } = props;
  const { currentStep, steps } = route.params;
  const [selectedLocations, setSelectedLocations] = React.useState<
    { id: string }[]
  >([]);

  const map = useRef<MapView>(null);

  const handleNavigation = () => {
    navigation.navigate("CreateItinerary", {
      currentStep: currentStep === steps ? 1 : currentStep + 1,
      steps: steps,
    });
  };

  let Comp = null;

  const handleLocationSelect = (id: string) => {
    setSelectedLocations((prevState) => {
      const isSelected = prevState.find((location) => location.id === id);
      if (isSelected) {
        return prevState.filter((location) => location.id !== id);
      } else {
        return [...prevState, { id }];
      }
    });
  };

  switch (currentStep) {
    case 1:
      Comp = <Step1Comp handleNavigation={handleNavigation} />;
      break;
    case 2:
      Comp = (
        <Step2Comp
          handleLocationSelect={handleLocationSelect}
          handleNavigation={handleNavigation}
          selectedLocations={selectedLocations}
        />
      );
      break;
    case 3:
      Comp = (
        <MapView
          ref={map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.122,
            longitudeDelta: 0.1521,
          }}
          style={{ flex: 1 }}
        >
          {/* <Geojson
            geojson={myPlace}
            strokeColor="gray"
            fillColor="transparent"
            strokeWidth={2}
          /> */}
        </MapView>
      );
      break;
  }

  return (
    <SafeAreaView flex={1} bg="primary">
      <View
        direction="row"
        justify="space-between"
        mt="m"
        px="l"
        align="center"
      >
        <Button onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/images/arrow-left.png")} />
        </Button>
        <Body1 color="white">Plan your trip</Body1>
        <View size={24}>
          {currentStep === 2 && (
            <>
              <Image source={require("../../assets/images/gallery.png")} />
              {selectedLocations.length > 0 && (
                <View
                  bg="red"
                  size={16}
                  pos="absolute"
                  isRound
                  place="center"
                  top={-4}
                  right={0}
                >
                  <Caption2 color="white">{selectedLocations.length}</Caption2>
                </View>
              )}
            </>
          )}
        </View>
      </View>
      <View direction="row" place="center" my="l">
        {Array(steps)
          .fill(0)
          .map((_, index) => {
            const passed = index + 1 < currentStep;
            const completed = currentStep > index;
            return (
              <>
                <View
                  bg="white"
                  alpha={completed ? 1 : 0.5}
                  key={index}
                  size={40}
                  isRound
                  place="center"
                >
                  <Body1 color={completed ? "primary" : "white"}>
                    {passed ? "✓" : index + 1}
                  </Body1>
                </View>
                {index < steps - 1 && (
                  <Body1 key={(Math.random() * 1000).toString()} color="white">
                    . . . . . . . .
                  </Body1>
                )}
              </>
            );
          })}
      </View>
      <Card
        borderRadius={["l", 0]}
        flex={1}
        // px="l" pt="m"
        overflow="hidden"
      >
        {/* <View place="center" mb="l">
          <Indicator />
        </View> */}
        {Comp}
      </Card>
    </SafeAreaView>
  );
};

const Step1Comp: FC<{ handleNavigation: () => void }> = (props) => {
  const { handleNavigation } = props;
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");

  const swapValues = () => {
    const temp = currentLocation;
    setCurrentLocation(destination);
    setDestination(temp);
  };

  return (
    <>
      <View>
        <FormField
          value={currentLocation}
          onChangeText={setCurrentLocation}
          leftIcon={
            <Image
              source={require("../../assets/images/current-location.png")}
            />
          }
          placeholder="Current location"
        />
        <FormField
          value={destination}
          onChangeText={setDestination}
          leftIcon={
            <Image source={require("../../assets/images/location.png")} />
          }
          placeholder="When are you going?"
        />
        <Card
          pos="absolute"
          borderRadius={20}
          top="50%"
          translateY={-28}
          right={0}
        >
          <Button p="s" onPress={swapValues}>
            <MaterialCommunityIcons
              name="swap-vertical"
              size={24}
              color="gray"
            />
          </Button>
        </Card>
      </View>
      <FormField
        leftIcon={
          <Image source={require("../../assets/images/calendar.png")} />
        }
        placeholder="Departure date"
      />
      <FormField
        leftIcon={
          <Image size={24} source={require("../../assets/images/clock.png")} />
        }
        placeholder="Trip duration"
      />
      <ButtonWithText label="Search" onPress={handleNavigation} />
    </>
  );
};

const gallery = [
  {
    id: "1",
    image: require("../../assets/images/image1.png"),
  },
  {
    id: "2",

    image: require("../../assets/images/image2.png"),
  },
  {
    id: "3",
    image: require("../../assets/images/image3.png"),
  },
  {
    id: "4",
    image: require("../../assets/images/image4.png"),
  },
  {
    id: "5",
    image: require("../../assets/images/image5.png"),
  },
  {
    id: "6",
    image: require("../../assets/images/image6.png"),
  },
  {
    id: "7",
    image: require("../../assets/images/image7.png"),
  },
  {
    id: "8",
    image: require("../../assets/images/image8.png"),
  },
];

interface Step2CompProps {
  handleNavigation: () => void;
  handleLocationSelect: (index: string) => void;
  selectedLocations: { id: string }[];
}

const Step2Comp: React.FC<Step2CompProps> = (props) => {
  const { handleNavigation, handleLocationSelect, selectedLocations } = props;
  const LocationItem = ({ id, image }: typeof gallery[number]) => {
    const [isLongPressed, setLongPressed] = useState(false);
    return (
      <Button
        bg="#000"
        onPress={() => handleLocationSelect(id)}
        onLongPress={() => setLongPressed(!isLongPressed)}
        mb="m"
        ml="m"
        borderRadius="s"
        overflow="hidden"
      >
        <ImageBg
          w={160}
          h={150}
          source={image}
          style={{
            opacity: selectedLocations.find((location) => location.id === id)
              ? 0.3
              : 1,
          }}
        >
          {isLongPressed && (
            <View bg="#000" alpha={0.6} flex={1} py="s" px="m">
              <Caption2 color="#fff" flex={1}>
                The Eiffel Tower is a wrought-iron lattice tower on the Champ de
                Mars in Paris, France.
              </Caption2>
              <Caption1 color="#fff">See more</Caption1>
            </View>
          )}
        </ImageBg>
      </Button>
    );
  };

  return (
    <>
      <FlatList data={gallery} keyExtractor={(item) => item.id} numColumns={2}>
        {({ item }) => {
          return <LocationItem {...item} />;
        }}
      </FlatList>
      <ButtonWithText
        pos="absolute"
        label="Next"
        w="100%"
        alignS="center"
        bottom={20}
        onPress={handleNavigation}
      />
    </>
  );
};

export default CreateItinerary;
