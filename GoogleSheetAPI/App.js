import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import { google } from 'googleapis';

// Load your credentials JSON file
const credentials = require('./todolist-credentials.json');
const sheets = google.sheets('v4');

const SPREADSHEET_ID = '159wU2Sm2DigKmQbfqvztA4JNYmWUCh9MlCEYqdBu4L0';

export default function App() {
  // Your app code here
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  function fetchData() {
    const auth = authorize();
    const sheets = google.sheets('v4');

    try {
      const response = sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Data!A1:B1', // Change this to your sheet name or range
        auth,
      });

      const values = response.data.values;
      if (values) {
        setTask(values[0])
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
    }
  }

  const addTask = () => {
    fetchData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Get GoogleSheet data"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <Button title="Add Google" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
            <Button title="Delete" onPress={() => deleteTask(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
