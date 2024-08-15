import { useState } from "react";
import { extractCoordinates } from "../util";

export function useValidate() {
  const [err, setErr] = useState([]);
  const [fieldsWithErrors, setFieldsWithErrors] = useState({});

  const validate = (values) => {
    const errors = [];
    const newFieldsWithError = {};

    let title = values.title.trim()
    let elavation = values.elavation.trim()
    let distance = values.distance.trim()
    let imageUrl = values.imageUrl.trim()
    let mountain = values.mountain.trim()
    let description = values.description.trim()
    let location = values.location.trim()

    if (!title) {
      errors.push('Title is required.');
      newFieldsWithError.title = true;
    }
    if (!elavation) {
      errors.push('Elevation is required.');
      newFieldsWithError.elavation = true;
    }
    if (!distance) {
      errors.push('Distance is required.');
      newFieldsWithError.distance = true;
    }
    if (!imageUrl) {
      errors.push('Image URL is required.');
      newFieldsWithError.imageUrl = true;
    }
    if (!mountain) {
      errors.push('Mountain is required.');
      newFieldsWithError.mountain = true;
    }
    if (!location) {
      errors.push('Location is required.');
      newFieldsWithError.location = true;
    }


    if (elavation > 10002) {
      errors.push('Elavation needs to be below 10000m')
      newFieldsWithError.elavation = true;
    }

    if (distance > 1000) {
      errors.push('The distance needs to be lower than 1000 hours')
      newFieldsWithError.distance = true;
    }

    let place = extractCoordinates(location)

    if (!place) {
      errors.push('Location needs to be valid.');
      newFieldsWithError.location = true;
    }


    if (description.length < 4) {
      errors.push('Description must be longer than 4 characters.');
      newFieldsWithError.description = true;
    }

    if (errors.length > 0) {
      setErr(errors);
      setFieldsWithErrors(newFieldsWithError);
      return false; // Validation failed
    }

    return {
      title,
      elavation,
      distance,
      imageUrl,
      mountain,
      description,
      location,
    };

  }

  return { err, fieldsWithErrors, validate }
}