import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * Custom input component with support for various types, including password with toggle visibility.
 *
 * @param {Object} props - React component props.
 * @param {string} props.placeholder - Placeholder text for the input.
 * @param {string} props.type - Type of the input (e.g., 'email', 'password', 'numeric').
 * @param {Object} props.style - Additional styles for the TextInput component.
 * @returns {JSX.Element} - Custom outlined input component.
 */
export default function OutlinedInput({ placeholder, type, ...props }) {
    // Default values for keyboard type and secure text entry
    let keyboardType = 'default';
    let secureTextEntry = false;

    // Determine keyboard type and secure text entry based on the input type
    switch (type) {
        case 'email':
            keyboardType = 'email-address';
            break;
        case 'password':
            secureTextEntry = true;
            break;
        case 'numeric':
            keyboardType = 'numeric';
            break;
        // Add more cases as needed
    }

    // State to handle secure text entry mode
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

    /**
     * Toggle secure text entry mode for password input.
     */
    const toggleSecureTextEntry = () => {
        setIsSecureTextEntry((prev) => !prev);
    };

    return (
        <View style={styles.inputContainer}>
            {/* Display placeholder if provided */}
            {placeholder && <Text style={styles.placeholder}>{placeholder}</Text>}

            {/* TextInput component */}
            <TextInput
                {...props}
                style={[styles.input, props.style]}
                selectionColor="#000000"
                keyboardType={keyboardType}
                secureTextEntry={isSecureTextEntry}
            />

            {/* Toggle visibility icon for password input */}
            {type === 'password' && (
                <TouchableOpacity
                    style={styles.icon}
                    onPress={toggleSecureTextEntry}
                >
                    <Ionicons
                        name={isSecureTextEntry ? 'eye-off' : 'eye'}
                        size={24}
                        color={"#979797"}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

// Styles for the component
const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 2,
        position: 'relative',
    },
    placeholder: {
        fontFamily: 'Poppins-Bold',
        position: 'absolute',
        marginTop: 10,
        marginLeft: 22,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 2,
        fontSize: 12,
        fontWeight: '600',
        color: '#979797',
    },
    input: {
        height: 40,
        borderColor: '#cbcbcb',
        borderWidth: 1,
        borderRadius: 13,
        paddingLeft: 10,
        paddingRight: 40,
        color: '#000000',
        textAlignVertical: 'center',
    },
    icon: {
        position: 'absolute',
        top: 40,
        right: 40,
    },
});