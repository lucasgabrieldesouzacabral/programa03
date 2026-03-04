import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  const categories = [
    { id: 1, name: 'Consultation', icon: 'stethoscope' },
    { id: 2, name: 'Dentist', icon: 'tooth' },
    { id: 3, name: 'Cardiologist', icon: 'heart' },
    { id: 4, name: 'Hospital', icon: 'hospital-box' },
    { id: 5, name: 'Emergency', icon: 'ambulance' },
    { id: 6, name: 'Laboratory', icon: 'microscope' },
  ];

  const doctors = [
    {
      id: 1,
      name: 'dr. Olivia Wilson',
      specialty: 'Consultant - Physiotherapy',
      rating: 4.9,
      reviews: 57,
      avatar: require('./gato2.png')
    },
    {
      id: 2,
      name: 'dr. Jonathan Patterson',
      specialty: 'Consultant - Internal Medicine',
      rating: 4.9,
      reviews: 37,
      avatar: require('./gato3.png')
    },
  ];

  return (
    <View style={styles.containerWrapper}>
      <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image 
            source={require('./gato.png')}
            style={styles.profileImage}
          />
          <View style={styles.headerText}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.nameText}> Gato </Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctor"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
          <MaterialCommunityIcons name="magnify" size={24} color="#6857fe" />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.showAll}>Show All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <View style={styles.categoryIconContainer}>
                <MaterialCommunityIcons name={category.icon} size={40} color="#6857fe" />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top doctors</Text>
        
        {doctors.map((doctor) => (
          <TouchableOpacity key={doctor.id} style={styles.doctorCard}>
            <Image 
              source={doctor.avatar}
              style={styles.doctorImage}
            />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <View style={styles.ratingContainer}>
                <MaterialCommunityIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>
                  {doctor.rating} ({doctor.reviews} Reviews)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons name="home" size={28} color="#fff" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons name="stethoscope" size={28} color="#fff" />
        <Text style={styles.footerText}>Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons name="calendar" size={28} color="#fff" />
        <Text style={styles.footerText}>Appointment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <MaterialCommunityIcons name="account" size={28} color="#fff" />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#f5f5f7',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    backgroundColor: '#6857fe',
    paddingHorizontal: 16,
    paddingVertical: 18,
    paddingTop: 70,    
    paddingBottom: 0,  
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  headerText: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '400',
  },
  nameText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0,
    marginTop: 16,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingBottom: 9,
  },
  showAll: {
    fontSize: 14,
    color: '#6857fe',
    fontWeight: '500',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontWeight: '500',
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 1,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 13,
    color: '#999',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#6857fe',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
    paddingVertical: 8,
    flex: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 6,
    fontWeight: '500',
  },
});