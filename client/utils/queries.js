import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query {
    rooms {
      _id
      name
      location
      description
      maxNumberOfParticipants
      minNumberOfParticipants
      minAgeRequirement
      successRate
      imageLocation
      duration
    }
  }
`;
export const GET_ROOM = gql`
  query ($roomId: ID!) {
    room(id: $roomId) {
      _id
      name
      location
      description
      maxNumberOfParticipants
      minNumberOfParticipants
      minAgeRequirement
      successRate
      imageLocation
      typeId
      duration
    }
  }
`;
