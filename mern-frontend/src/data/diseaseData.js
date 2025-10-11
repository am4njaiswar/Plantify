export const diseaseData = {
  // Apple Diseases
  'Apple___Apple_scab': {
    id: 'Apple___Apple_scab',
    name: 'Apple Scab',
    scientificName: 'Venturia inaequalis',
    type: 'Fungal',
    description: 'A common fungal disease that affects apple trees, causing lesions on leaves and fruits. It thrives in cool, wet spring weather and can significantly reduce fruit quality and yield.',
    symptoms: [
      'Olive-green to brown spots on leaves and fruits',
      'Velvety lesions on undersides of leaves',
      'Corky, cracked spots on fruits',
      'Premature leaf drop in severe cases',
      'Distorted or stunted leaves'
    ],
    prevention: [
      'Plant resistant varieties like Liberty or Enterprise',
      'Remove fallen leaves in autumn to reduce spore carryover',
      'Apply preventative fungicides in early spring',
      'Ensure good air circulation through proper pruning',
      'Avoid overhead irrigation'
    ],
    treatment: [
      'Apply sulfur or copper-based fungicides',
      'Use fungicides during pink bud and petal fall stages',
      'Remove and destroy infected plant material',
      'Apply myclobutanil or trifloxystrobin during infection periods'
    ],
    severity: 'Medium',
    affectedPlants: ['Apple trees', 'Crabapple trees'],
    imageUrl: '/images/apple_scab.JPG'
  },
  'Apple___Black_rot': {
    id: 'Apple___Black_rot',
    name: 'Apple Black Rot',
    scientificName: 'Botryosphaeria obtusa',
    type: 'Fungal',
    description: 'A fungal disease that causes fruit rot and leaf spots, potentially leading to significant crop loss if not managed properly.',
    symptoms: [
      'Small purple spots on leaves that enlarge to brown lesions',
      'Frogeye pattern on leaves with purple margins',
      'Brown to black rot on fruits',
      'Mummified fruits hanging on trees'
    ],
    prevention: [
      'Remove mummified fruits from trees',
      'Prune out dead wood and cankers',
      'Maintain tree vigor with proper nutrition',
      'Ensure good sunlight penetration'
    ],
    treatment: [
      'Apply captan or thiophanate-methyl fungicides',
      'Remove infected plant parts',
      'Practice good sanitation in orchard'
    ],
    severity: 'High',
    affectedPlants: ['Apple trees'],
    imageUrl: '/images/apple_black_rot.JPG'
  },
  'Apple___Cedar_apple_rust': {
    id: 'Apple___Cedar_apple_rust',
    name: 'Cedar Apple Rust',
    scientificName: 'Gymnosporangium juniperi-virginianae',
    type: 'Fungal',
    description: 'A fungal disease that requires both apple trees and cedar trees to complete its life cycle.',
    symptoms: [
      'Yellow-orange spots on upper leaf surfaces',
      'Cup-shaped structures on lower leaf surfaces',
      'Distorted fruits with rust-colored lesions',
      'Early leaf drop'
    ],
    prevention: [
      'Remove nearby cedar trees if possible',
      'Plant resistant apple varieties',
      'Apply preventative fungicides in spring'
    ],
    treatment: [
      'Apply myclobutanil or triadimefon',
      'Remove galls from cedar trees',
      'Use fungicides during pink through petal fall stages'
    ],
    severity: 'Medium',
    affectedPlants: ['Apple trees', 'Cedar trees'],
    imageUrl: '/images/apple_cedar_appleRust.JPG'
  },
  'Apple___healthy': {
    id: 'Apple___healthy',
    name: 'Healthy Apple Plant',
    type: 'Healthy',
    description: 'A healthy apple plant showing optimal growth without any disease symptoms.',
    symptoms: [
      'Vibrant green leaves without spots or discoloration',
      'Strong stem and branch growth',
      'Normal fruit development',
      'No signs of stress or disease'
    ],
    prevention: [
      'Continue current maintenance practices',
      'Regular monitoring for early detection',
      'Proper watering and fertilization schedule',
      'Maintain good air circulation'
    ],
    treatment: [
      'No treatment needed - plant is healthy',
      'Continue preventative care measures',
      'Maintain optimal growing conditions'
    ],
    severity: 'None',
    affectedPlants: ['Apple trees'],
    imageUrl: '/images/apple_healthy.JPG'
  },
  'Blueberry___healthy': {
    id: 'Blueberry___healthy',
    name: 'Healthy Blueberry Plant',
    type: 'Healthy',
    description: 'A healthy blueberry plant with vigorous growth and no disease symptoms.',
    symptoms: [
      'Deep green, waxy leaves',
      'Strong cane development',
      'Normal berry production',
      'No spots or discoloration'
    ],
    prevention: [
      'Maintain acidic soil conditions',
      'Ensure proper drainage',
      'Regular pruning for air circulation',
      'Monitor for pests regularly'
    ],
    treatment: [
      'No treatment needed',
      'Continue good cultural practices',
      'Maintain soil pH between 4.5-5.5'
    ],
    severity: 'None',
    affectedPlants: ['Blueberry bushes'],
    imageUrl: '/images/blueberry_healthy.JPG'
  },
  'Cherry_(including_sour)___Powdery_mildew': {
    id: 'Cherry_(including_sour)___Powdery_mildew',
    name: 'Cherry Powdery Mildew',
    scientificName: 'Podosphaera clandestina',
    type: 'Fungal',
    description: 'A fungal disease that creates white powdery growth on cherry leaves and fruits.',
    symptoms: [
      'White powdery coating on leaves and shoots',
      'Distorted or stunted leaf growth',
      'Reduced fruit quality and yield',
      'Premature leaf drop in severe cases'
    ],
    prevention: [
      'Plant resistant varieties',
      'Ensure good air circulation through pruning',
      'Avoid overhead irrigation',
      'Apply sulfur-based preventatives'
    ],
    treatment: [
      'Apply myclobutanil or triforine',
      'Use horticultural oils',
      'Remove severely infected plant parts',
      'Apply potassium bicarbonate solutions'
    ],
    severity: 'Medium',
    affectedPlants: ['Sweet cherry', 'Sour cherry'],
    imageUrl: '/images/cherry_powdery_mildew.JPG'
  },
  'Cherry_(including_sour)___healthy': {
    id: 'Cherry_(including_sour)___healthy',
    name: 'Healthy Cherry Plant',
    type: 'Healthy',
    description: 'A healthy cherry tree showing vigorous growth and no disease symptoms.',
    symptoms: [
      'Glossy green leaves without spots',
      'Strong branch structure',
      'Normal fruit development',
      'No signs of stress'
    ],
    prevention: [
      'Continue proper orchard management',
      'Regular monitoring for diseases',
      'Maintain balanced fertilization',
      'Proper pruning techniques'
    ],
    treatment: [
      'No treatment required',
      'Maintain current care practices',
      'Continue preventative measures'
    ],
    severity: 'None',
    affectedPlants: ['Cherry trees'],
    imageUrl: '/images/cherry_healthy.JPG'
  },
  'Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot': {
    id: 'Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot',
    name: 'Corn Gray Leaf Spot',
    scientificName: 'Cercospora zeae-maydis',
    type: 'Fungal',
    description: 'A significant fungal disease of corn that can cause substantial yield loss under favorable conditions.',
    symptoms: [
      'Rectangular, tan to gray lesions on leaves',
      'Lesions bounded by leaf veins',
      'Premature death of lower leaves',
      'Reduced photosynthesis and yield'
    ],
    prevention: [
      'Plant resistant hybrids',
      'Practice crop rotation with non-host crops',
      'Reduce tillage to minimize residue',
      'Ensure proper plant spacing'
    ],
    treatment: [
      'Apply strobilurin fungicides',
      'Use triazole-based products',
      'Apply at tasseling stage if needed',
      'Use combination fungicides for better control'
    ],
    severity: 'High',
    affectedPlants: ['Corn/Maize'],
    imageUrl: '/images/corn_cercospora.JPG'
  },
  'Corn_(maize)___Common_rust_': {
    id: 'Corn_(maize)___Common_rust_',
    name: 'Corn Common Rust',
    scientificName: 'Puccinia sorghi',
    type: 'Fungal',
    description: 'A common fungal disease affecting corn plants, characterized by rust-colored pustules on leaves.',
    symptoms: [
      'Small, circular to elongated cinnamon-brown pustules',
      'Pustules appear on both leaf surfaces',
      'Reddish-brown spores released from pustules',
      'May cause premature leaf death in severe cases'
    ],
    prevention: [
      'Plant resistant hybrids',
      'Avoid late planting in rust-prone areas',
      'Practice crop rotation',
      'Ensure balanced fertility'
    ],
    treatment: [
      'Apply fungicides containing triazoles',
      'Use strobilurin fungicides if infection is severe',
      'Remove and destroy infected plant debris'
    ],
    severity: 'Medium',
    affectedPlants: ['Corn/Maize'],
    imageUrl: '/images/corn_common_rust.JPG'
  },
  'Corn_(maize)___Northern_Leaf_Blight': {
    id: 'Corn_(maize)___Northern_Leaf_Blight',
    name: 'Corn Northern Leaf Blight',
    scientificName: 'Exserohilum turcicum',
    type: 'Fungal',
    description: 'A fungal disease that causes large cigar-shaped lesions on corn leaves.',
    symptoms: [
      'Large, gray-green to tan cigar-shaped lesions',
      'Lesions 1-6 inches long on leaves',
      'May coalesce and kill entire leaves',
      'More severe in cool, humid conditions'
    ],
    prevention: [
      'Plant resistant hybrids',
      'Practice crop rotation',
      'Plow under crop residue',
      'Use certified disease-free seeds'
    ],
    treatment: [
      'Apply fungicides at first sign of disease',
      'Use products containing pyraclostrobin',
      'Apply triazole fungicides if needed',
      'Consider early harvest if severe'
    ],
    severity: 'High',
    affectedPlants: ['Corn/Maize'],
    imageUrl: '/images/corn_northern_leaf_blight.JPG'
  },
  'Corn_(maize)___healthy': {
    id: 'Corn_(maize)___healthy',
    name: 'Healthy Corn Plant',
    type: 'Healthy',
    description: 'A healthy corn plant with vigorous growth and optimal development.',
    symptoms: [
      'Deep green, upright leaves',
      'Strong stalk development',
      'Proper ear formation',
      'No discoloration or spots'
    ],
    prevention: [
      'Maintain proper plant spacing',
      'Ensure adequate nitrogen levels',
      'Practice crop rotation',
      'Monitor for pests regularly'
    ],
    treatment: [
      'No treatment needed - plant is healthy',
      'Continue good agricultural practices',
      'Maintain soil fertility'
    ],
    severity: 'None',
    affectedPlants: ['Corn/Maize'],
    imageUrl: '/images/corn_healthy.JPG'
  },
  'Grape___Black_rot': {
    id: 'Grape___Black_rot',
    name: 'Grape Black Rot',
    scientificName: 'Guignardia bidwellii',
    type: 'Fungal',
    description: 'A serious fungal disease that can cause significant yield loss in grape production if not properly managed.',
    symptoms: [
      'Brown spots on leaves with black pycnidia',
      'Fruit shrivels and becomes black mummies',
      'Lesions on shoots and tendrils',
      'Premature defoliation in severe infections'
    ],
    prevention: [
      'Plant resistant varieties when available',
      'Prune for good air circulation in canopy',
      'Remove mummies from vines during dormancy',
      'Apply preventative fungicides before flowering'
    ],
    treatment: [
      'Apply mancozeb or captan fungicides',
      'Use myclobutanil for curative action',
      'Remove and destroy infected clusters',
      'Apply fungicides at 7-10 day intervals during infection periods'
    ],
    severity: 'High',
    affectedPlants: ['Grape vines'],
    imageUrl: '/images/grape_black_rot.JPG'
  },
  'Grape___Esca_(Black_Measles)': {
    id: 'Grape___Esca_(Black_Measles)',
    name: 'Grape Esca (Black Measles)',
    scientificName: 'Phaeomoniella chlamydospora',
    type: 'Fungal',
    description: 'A complex fungal disease affecting grapevine wood, leading to various symptoms including leaf discoloration and berry symptoms.',
    symptoms: [
      'Tiger-stripe pattern on leaves (interveinal chlorosis)',
      'Black measles spots on berries',
      'Wood decay in trunks and cordons',
      'Sudden vine collapse in acute form'
    ],
    prevention: [
      'Use certified disease-free planting material',
      'Avoid mechanical injury to vines',
      'Prune during dry weather',
      'Protect pruning wounds with fungicides'
    ],
    treatment: [
      'No effective cure once established',
      'Remove and destroy severely infected vines',
      'Maintain vine vigor through proper nutrition',
      'Use trunk surgery in some cases'
    ],
    severity: 'Very High',
    affectedPlants: ['Grape vines'],
    imageUrl: '/images/grape_esca.JPG'
  },
  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': {
    id: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    name: 'Grape Leaf Blight',
    scientificName: 'Pseudocercospora vitis',
    type: 'Fungal',
    description: 'A fungal disease causing leaf spots and defoliation in grapevines.',
    symptoms: [
      'Angular reddish-brown spots on leaves',
      'Yellow halos around lesions',
      'Premature defoliation',
      'Reduced fruit quality and yield'
    ],
    prevention: [
      'Ensure good air circulation',
      'Avoid overhead irrigation',
      'Remove infected leaves during dormancy',
      'Apply copper-based preventatives'
    ],
    treatment: [
      'Apply fungicides containing strobilurins',
      'Use triazole fungicides if infection is severe',
      'Remove severely infected leaves',
      'Maintain proper vine nutrition'
    ],
    severity: 'Medium',
    affectedPlants: ['Grape vines'],
    imageUrl: '/images/grape_leaf_blight.JPG'
  },
  'Grape___healthy': {
    id: 'Grape___healthy',
    name: 'Healthy Grape Vine',
    type: 'Healthy',
    description: 'A healthy grape vine showing vigorous growth and optimal fruit production.',
    symptoms: [
      'Uniform green leaves without spots',
      'Strong cane growth',
      'Healthy cluster development',
      'No discoloration or wilting'
    ],
    prevention: [
      'Continue proper vineyard management',
      'Monitor for pests and diseases regularly',
      'Maintain proper pruning schedule',
      'Ensure balanced nutrition'
    ],
    treatment: [
      'No treatment needed - vine is healthy',
      'Continue preventative spray program',
      'Maintain soil health and proper irrigation'
    ],
    severity: 'None',
    affectedPlants: ['Grape vines'],
    imageUrl: '/images/grape_healthy.JPG'
  },
  'Orange___Haunglongbing_(Citrus_greening)': {
    id: 'Orange___Haunglongbing_(Citrus_greening)',
    name: 'Citrus Greening (Huanglongbing)',
    scientificName: 'Candidatus Liberibacter asiaticus',
    type: 'Bacterial',
    description: 'A devastating bacterial disease of citrus trees spread by psyllid insects, causing gradual decline and death of trees.',
    symptoms: [
      'Asymmetrical leaf mottling (yellow and green patches)',
      'Small, misshapen, bitter fruits',
      'Fruits may remain partially green',
      'Twig dieback and leaf drop',
      'Overall tree decline and reduced yield'
    ],
    prevention: [
      'Use certified disease-free nursery stock',
      'Control Asian citrus psyllid populations',
      'Remove and destroy infected trees',
      'Plant resistant rootstocks when available',
      'Implement area-wide management programs'
    ],
    treatment: [
      'No cure once tree is infected',
      'Remove and destroy infected trees to prevent spread',
      'Antibiotic trunk injections may slow progression',
      'Enhanced nutrition to maintain tree health'
    ],
    severity: 'Very High',
    affectedPlants: ['Orange', 'Lemon', 'Lime', 'Grapefruit', 'All citrus'],
    imageUrl: '/images/orange/haunglongbing.JPG'
  },
  'Peach___Bacterial_spot': {
    id: 'Peach___Bacterial_spot',
    name: 'Peach Bacterial Spot',
    scientificName: 'Xanthomonas arboricola pv. pruni',
    type: 'Bacterial',
    description: 'A bacterial disease that affects peach trees, causing lesions on leaves, fruits, and twigs.',
    symptoms: [
      'Small, angular, water-soaked spots on leaves',
      'Spots become purple-brown with yellow halos',
      'Cracks and pits on fruit surfaces',
      'Twig cankers and dieback'
    ],
    prevention: [
      'Plant resistant varieties',
      'Use copper-based sprays during dormancy',
      'Avoid overhead irrigation',
      'Prune for good air circulation'
    ],
    treatment: [
      'Apply copper bactericides',
      'Use streptomycin sprays during bloom',
      'Remove severely infected branches',
      'Practice good orchard sanitation'
    ],
    severity: 'High',
    affectedPlants: ['Peach', 'Nectarine', 'Apricot', 'Plum'],
    imageUrl: '/images/peach_bacterial_spot.JPG'
  },
  'Peach___healthy': {
    id: 'Peach___healthy',
    name: 'Healthy Peach Tree',
    type: 'Healthy',
    description: 'A healthy peach tree showing vigorous growth and optimal fruit production.',
    symptoms: [
      'Lush green leaves without spots',
      'Strong branch structure',
      'Normal fruit development',
      'No signs of disease or stress'
    ],
    prevention: [
      'Continue proper orchard management',
      'Regular monitoring for pests and diseases',
      'Proper pruning and training',
      'Balanced fertilization program'
    ],
    treatment: [
      'No treatment needed',
      'Maintain current care practices',
      'Continue preventative measures'
    ],
    severity: 'None',
    affectedPlants: ['Peach trees'],
    imageUrl: '/images/peach_healthy.JPG'
  },
  'Pepper,_bell___Bacterial_spot': {
    id: 'Pepper,_bell___Bacterial_spot',
    name: 'Bell Pepper Bacterial Spot',
    scientificName: 'Xanthomonas euvesicatoria',
    type: 'Bacterial',
    description: 'A bacterial disease that causes spots on pepper leaves and fruits, reducing yield and quality.',
    symptoms: [
      'Small, water-soaked spots on leaves',
      'Spots become angular and brown with yellow halos',
      'Raised, scabby lesions on fruits',
      'Premature leaf drop in severe cases'
    ],
    prevention: [
      'Use disease-free seeds and transplants',
      'Practice crop rotation',
      'Avoid working with plants when wet',
      'Use drip irrigation instead of overhead'
    ],
    treatment: [
      'Apply copper-based bactericides',
      'Use streptomycin sprays early in season',
      'Remove and destroy infected plants',
      'Improve air circulation around plants'
    ],
    severity: 'Medium',
    affectedPlants: ['Bell pepper', 'Chili pepper'],
    imageUrl: '/images/pepper_bell_bacterial_spot.JPG'
  },
  'Pepper,_bell___healthy': {
    id: 'Pepper,_bell___healthy',
    name: 'Healthy Bell Pepper Plant',
    type: 'Healthy',
    description: 'A healthy bell pepper plant with vigorous growth and optimal fruit production.',
    symptoms: [
      'Deep green leaves without spots',
      'Strong stem growth',
      'Normal fruit development',
      'No discoloration or wilting'
    ],
    prevention: [
      'Continue good gardening practices',
      'Regular monitoring for pests',
      'Proper watering and fertilization',
      'Crop rotation when possible'
    ],
    treatment: [
      'No treatment needed',
      'Maintain current care routine',
      'Continue preventative measures'
    ],
    severity: 'None',
    affectedPlants: ['Bell pepper'],
    imageUrl: '/images/pepper_bell_healthy.JPG'
  },
  'Potato___Early_blight': {
    id: 'Potato___Early_blight',
    name: 'Potato Early Blight',
    scientificName: 'Alternaria solani',
    type: 'Fungal',
    description: 'A common fungal disease affecting potato plants, causing characteristic target-like spots on leaves.',
    symptoms: [
      'Dark brown spots with concentric rings on older leaves',
      'Yellow halos around lesions',
      'Premature defoliation',
      'Lesions on stems and tubers'
    ],
    prevention: [
      'Use certified disease-free seed potatoes',
      'Practice 3-year crop rotation',
      'Maintain proper plant spacing',
      'Avoid overhead irrigation'
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb fungicides',
      'Use azoxystrobin for better control',
      'Remove infected plant debris after harvest'
    ],
    severity: 'Medium',
    affectedPlants: ['Potato', 'Tomato'],
    imageUrl: '/images/potato_early_blight.JPG'
  },
  'Potato___Late_blight': {
    id: 'Potato___Late_blight',
    name: 'Potato Late Blight',
    scientificName: 'Phytophthora infestans',
    type: 'Oomycete',
    description: 'The infamous disease that caused the Irish Potato Famine, capable of destroying entire crops rapidly.',
    symptoms: [
      'Water-soaked lesions on leaves that turn brown',
      'White fungal growth under leaves in humid conditions',
      'Rapid tissue collapse',
      'Brown rot on tubers'
    ],
    prevention: [
      'Plant resistant varieties',
      'Use certified disease-free seed potatoes',
      'Destroy cull piles and volunteer plants',
      'Apply preventative fungicides'
    ],
    treatment: [
      'Apply metalaxyl or mefenoxam fungicides',
      'Use chlorothalonil as protectant',
      'Destroy infected plants immediately'
    ],
    severity: 'Very High',
    affectedPlants: ['Potato', 'Tomato'],
    imageUrl: '/images/potato_late_blight.JPG'
  },
  'Potato___healthy': {
    id: 'Potato___healthy',
    name: 'Healthy Potato Plant',
    type: 'Healthy',
    description: 'A healthy potato plant with vigorous growth and proper tuber development.',
    symptoms: [
      'Lush green foliage without spots',
      'Strong stem growth',
      'Proper tuber formation',
      'No wilting or discoloration'
    ],
    prevention: [
      'Continue good cultivation practices',
      'Monitor soil moisture levels',
      'Practice crop rotation',
      'Use certified seed potatoes'
    ],
    treatment: [
      'No treatment needed - plant is healthy',
      'Maintain proper hilling practices',
      'Ensure balanced fertilization'
    ],
    severity: 'None',
    affectedPlants: ['Potato'],
    imageUrl: '/images/potato_healthy.JPG'
  },
  'Raspberry___healthy': {
    id: 'Raspberry___healthy',
    name: 'Healthy Raspberry Plant',
    type: 'Healthy',
    description: 'A healthy raspberry plant with vigorous growth and optimal fruit production.',
    symptoms: [
      'Deep green leaves without spots',
      'Strong cane development',
      'Normal berry production',
      'No signs of disease or stress'
    ],
    prevention: [
      'Continue proper patch management',
      'Regular monitoring for pests',
      'Adequate spacing for air circulation',
      'Proper pruning of old canes'
    ],
    treatment: [
      'No treatment needed',
      'Maintain current care practices',
      'Continue preventative measures'
    ],
    severity: 'None',
    affectedPlants: ['Raspberry'],
    imageUrl: '/images/rasberry_healthy.JPG'
  },
  'Soybean___healthy': {
    id: 'Soybean___healthy',
    name: 'Healthy Soybean Plant',
    type: 'Healthy',
    description: 'A healthy soybean plant with optimal growth and pod development.',
    symptoms: [
      'Vibrant green trifoliate leaves',
      'Strong stem structure',
      'Normal pod formation',
      'No discoloration or spots'
    ],
    prevention: [
      'Continue good field management',
      'Regular scouting for pests',
      'Proper planting density',
      'Balanced fertilization'
    ],
    treatment: [
      'No treatment needed',
      'Maintain current agricultural practices',
      'Continue crop rotation'
    ],
    severity: 'None',
    affectedPlants: ['Soybean'],
    imageUrl: '/images/soyabean_healthy.JPG'
  },
  'Squash___Powdery_mildew': {
    id: 'Squash___Powdery_mildew',
    name: 'Squash Powdery Mildew',
    scientificName: 'Podosphaera xanthii',
    type: 'Fungal',
    description: 'A common fungal disease affecting squash plants, characterized by white powdery growth on leaves.',
    symptoms: [
      'White powdery spots on upper leaf surfaces',
      'Yellowing and wilting of infected leaves',
      'Reduced fruit size and quality',
      'Premature plant decline'
    ],
    prevention: [
      'Plant resistant varieties',
      'Ensure good air circulation',
      'Avoid overhead watering',
      'Apply sulfur-based preventatives'
    ],
    treatment: [
      'Apply potassium bicarbonate solutions',
      'Use horticultural oils',
      'Apply myclobutanil or triforine',
      'Remove severely infected leaves'
    ],
    severity: 'Medium',
    affectedPlants: ['Squash', 'Pumpkin', 'Zucchini', 'Cucumber'],
    imageUrl: '/images/squash__powdery_mildew.JPG'
  },
  'Strawberry___Leaf_scorch': {
    id: 'Strawberry___Leaf_scorch',
    name: 'Strawberry Leaf Scorch',
    scientificName: 'Diplocarpon earlianum',
    type: 'Fungal',
    description: 'A common fungal disease affecting strawberry plants, causing leaf spotting and defoliation.',
    symptoms: [
      'Small purple spots on upper leaf surfaces',
      'Spots enlarge and develop dark brown centers',
      'Leaves may appear scorched or burned',
      'Premature leaf drop in severe cases'
    ],
    prevention: [
      'Plant resistant varieties when available',
      'Remove and destroy infected leaves',
      'Ensure good air circulation through proper spacing',
      'Avoid overhead irrigation'
    ],
    treatment: [
      'Apply captan or thiophanate-methyl fungicides',
      'Use copper-based fungicides early in season',
      'Remove severely infected plants',
      'Apply fungicides at 7-10 day intervals during wet weather'
    ],
    severity: 'Medium',
    affectedPlants: ['Strawberry'],
    imageUrl: '/images/strawberry_leaf_scorch.JPG'
  },
  'Strawberry___healthy': {
    id: 'Strawberry___healthy',
    name: 'Healthy Strawberry Plant',
    type: 'Healthy',
    description: 'A healthy strawberry plant with vigorous growth and optimal fruit production.',
    symptoms: [
      'Deep green, trifoliate leaves without spots',
      'Strong runner production',
      'Normal fruit development',
      'No discoloration or wilting'
    ],
    prevention: [
      'Continue proper bed maintenance',
      'Regular monitoring for pests and diseases',
      'Adequate watering and fertilization',
      'Proper spacing for air circulation'
    ],
    treatment: [
      'No treatment needed - plant is healthy',
      'Continue current care practices',
      'Maintain soil health and proper pH'
    ],
    severity: 'None',
    affectedPlants: ['Strawberry'],
    imageUrl: '/images/strawberry_healthy.JPG'
  },
  'Tomato___Bacterial_spot': {
    id: 'Tomato___Bacterial_spot',
    name: 'Tomato Bacterial Spot',
    scientificName: 'Xanthomonas spp.',
    type: 'Bacterial',
    description: 'A bacterial disease that causes spots on tomato leaves and fruits, reducing yield and quality.',
    symptoms: [
      'Small, water-soaked spots on leaves',
      'Spots become angular with yellow halos',
      'Raised, scabby lesions on fruits',
      'Premature defoliation in severe infections'
    ],
    prevention: [
      'Use disease-free seeds and transplants',
      'Practice crop rotation',
      'Avoid working with plants when wet',
      'Use drip irrigation instead of overhead'
    ],
    treatment: [
      'Apply copper-based bactericides',
      'Use streptomycin sprays early in season',
      'Remove and destroy infected plants',
      'Improve air circulation around plants'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato', 'Pepper'],
    imageUrl: '/images/tomato_bacterial_spot.JPG'
  },
  'Tomato___Early_blight': {
    id: 'Tomato___Early_blight',
    name: 'Tomato Early Blight',
    scientificName: 'Alternaria solani',
    type: 'Fungal',
    description: 'A common fungal disease causing target-like spots on tomato leaves, stems, and fruits.',
    symptoms: [
      'Dark brown spots with concentric rings on lower leaves',
      'Yellow halos around lesions',
      'Collar rot on stems',
      'Sunken spots on fruits'
    ],
    prevention: [
      'Use disease-free seeds and transplants',
      'Practice crop rotation',
      'Stake plants for better air circulation',
      'Remove infected plant debris'
    ],
    treatment: [
      'Apply chlorothalonil or copper fungicides',
      'Remove severely infected leaves',
      'Use resistant varieties when available'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato', 'Potato'],
    imageUrl: '/images/tomato_early_blight.JPG'
  },
  'Tomato___Late_blight': {
    id: 'Tomato___Late_blight',
    name: 'Tomato Late Blight',
    scientificName: 'Phytophthora infestans',
    type: 'Oomycete',
    description: 'A devastating disease that can destroy entire tomato crops within days under favorable conditions.',
    symptoms: [
      'Large, dark, water-soaked lesions on leaves',
      'White fuzzy growth under leaves in humid conditions',
      'Brown, firm rot on fruits',
      'Rapid plant collapse in wet weather'
    ],
    prevention: [
      'Use certified disease-free seeds',
      'Practice crop rotation',
      'Ensure proper spacing for air circulation',
      'Avoid overhead watering',
      'Apply copper-based preventatives'
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb at first sign',
      'Remove and destroy infected plants',
      'Use fungicides containing fenamidone',
      'Improve air circulation around plants'
    ],
    severity: 'Very High',
    affectedPlants: ['Tomato', 'Potato'],
    imageUrl: '/images/tomato_late_blight.JPG'
  },
  'Tomato___Leaf_Mold': {
    id: 'Tomato___Leaf_Mold',
    name: 'Tomato Leaf Mold',
    scientificName: 'Passalora fulva',
    type: 'Fungal',
    description: 'A fungal disease that affects tomato plants in humid conditions, causing yellow spots and mold growth.',
    symptoms: [
      'Pale green to yellow spots on upper leaf surfaces',
      'Velvety olive-green to brown mold on lower surfaces',
      'Leaves may curl and die',
      'Reduced fruit production'
    ],
    prevention: [
      'Ensure good air circulation in greenhouse',
      'Reduce humidity levels',
      'Use resistant varieties',
      'Avoid overhead watering'
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb fungicides',
      'Use sulfur dust or sprays',
      'Remove infected leaves',
      'Improve ventilation'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato'],
    imageUrl: '/images/tomato_leaf_mold.JPG'
  },
  'Tomato___Septoria_leaf_spot': {
    id: 'Tomato___Septoria_leaf_spot',
    name: 'Tomato Septoria Leaf Spot',
    scientificName: 'Septoria lycopersici',
    type: 'Fungal',
    description: 'A common fungal disease causing numerous small spots on tomato leaves, leading to defoliation.',
    symptoms: [
      'Small, circular spots with dark borders on lower leaves',
      'Spots have tan centers with small black fruiting bodies',
      'Yellowing and dropping of infected leaves',
      'Defoliation starting from bottom of plant'
    ],
    prevention: [
      'Practice crop rotation',
      'Remove infected plant debris',
      'Avoid overhead irrigation',
      'Use mulch to prevent soil splashing'
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb fungicides',
      'Use copper-based sprays',
      'Remove severely infected leaves',
      'Apply fungicides at first sign of disease'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato'],
    imageUrl: '/images/tomato_septoria_leaf_spot.JPG'
  },
  'Tomato___Spider_mites_Two-spotted_spider_mite': {
    id: 'Tomato___Spider_mites_Two-spotted_spider_mite',
    name: 'Tomato Spider Mites',
    scientificName: 'Tetranychus urticae',
    type: 'Pest',
    description: 'Tiny arachnids that feed on plant sap, causing stippling and webbing on tomato leaves.',
    symptoms: [
      'Fine stippling (tiny yellow dots) on leaves',
      'Fine webbing on undersides of leaves',
      'Leaves may turn bronze or yellow',
      'Reduced plant vigor and yield'
    ],
    prevention: [
      'Maintain proper plant hydration',
      'Avoid dusty conditions',
      'Use reflective mulches',
      'Encourage natural predators like ladybugs'
    ],
    treatment: [
      'Apply insecticidal soaps',
      'Use horticultural oils',
      'Apply miticides if severe',
      'Spray plants with strong water stream'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato', 'Many other vegetables and ornamentals'],
    imageUrl: '/images/tomato_spider_mites.JPG'
  },
  'Tomato___Target_Spot': {
    id: 'Tomato___Target_Spot',
    name: 'Tomato Target Spot',
    scientificName: 'Corynespora cassiicola',
    type: 'Fungal',
    description: 'A fungal disease causing target-like spots on tomato leaves and fruits.',
    symptoms: [
      'Circular, target-like spots with concentric rings',
      'Spots may have yellow halos',
      'Lesions on stems and fruits',
      'Premature defoliation in severe cases'
    ],
    prevention: [
      'Practice crop rotation',
      'Remove infected plant debris',
      'Ensure good air circulation',
      'Avoid overhead irrigation'
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb fungicides',
      'Use strobilurin fungicides',
      'Remove severely infected leaves',
      'Apply fungicides preventatively in humid weather'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato'],
    imageUrl: '/images/tomato_target_spot.JPG'
  },
  'Tomato___Tomato_Yellow_Leaf_Curl_Virus': {
    id: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    name: 'Tomato Yellow Leaf Curl Virus',
    scientificName: 'TYLCV',
    type: 'Viral',
    description: 'A serious viral disease transmitted by whiteflies, causing stunting and leaf curling in tomato plants.',
    symptoms: [
      'Upward curling of leaves',
      'Yellowing of leaf margins',
      'Stunted plant growth',
      'Reduced fruit set and size'
    ],
    prevention: [
      'Use resistant varieties',
      'Control whitefly populations',
      'Use reflective mulches',
      'Remove infected plants immediately'
    ],
    treatment: [
      'No cure for infected plants',
      'Remove and destroy infected plants',
      'Control whiteflies with insecticides',
      'Use virus-free transplants'
    ],
    severity: 'High',
    affectedPlants: ['Tomato'],
    imageUrl: '/images/tomato_yellow_curl_virus.JPG'
  },
  'Tomato___Tomato_mosaic_virus': {
    id: 'Tomato___Tomato_mosaic_virus',
    name: 'Tomato Mosaic Virus',
    scientificName: 'ToMV',
    type: 'Viral',
    description: 'A common viral disease causing mosaic patterns and distortion on tomato leaves and fruits.',
    symptoms: [
      'Light and dark green mosaic patterns on leaves',
      'Leaf distortion and curling',
      'Stunted plant growth',
      'Reduced fruit yield and quality'
    ],
    prevention: [
      'Use virus-free seeds and transplants',
      'Practice good sanitation',
      'Control aphid populations',
      'Avoid smoking near tomato plants'
    ],
    treatment: [
      'No cure for infected plants',
      'Remove and destroy infected plants',
      'Disinfect tools between plants',
      'Use resistant varieties when available'
    ],
    severity: 'Medium',
    affectedPlants: ['Tomato', 'Pepper'],
    imageUrl: '/images/tomato_mosaic_virus.JPG'
  },
  'Tomato___healthy': {
    id: 'Tomato___healthy',
    name: 'Healthy Tomato Plant',
    type: 'Healthy',
    description: 'A healthy tomato plant showing vigorous growth and optimal fruit production.',
    symptoms: [
      'Vibrant green leaves without spots or curling',
      'Strong stem growth',
      'Normal fruit development',
      'No signs of disease or stress'
    ],
    prevention: [
      'Continue good gardening practices',
      'Regular monitoring for pests and diseases',
      'Proper watering and fertilization',
      'Crop rotation when possible'
    ],
    treatment: [
      'No treatment needed',
      'Maintain current care routine',
      'Continue preventative measures'
    ],
    severity: 'None',
    affectedPlants: ['Tomato'],
    imageUrl: '/images/tomato_healthy.JPG'
  }
};

// Helper functions
export const getDiseaseById = (id) => diseaseData[id];
export const diseaseExists = (id) => id in diseaseData;
export const getAllDiseases = () => Object.values(diseaseData);