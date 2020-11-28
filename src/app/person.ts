export const person = {
    name: {
      label: 'Name',
      type: 'text',
    },
    age: {
      label: 'Age',
      type: 'text'
    },
    email: {
      label: 'Email',
      type: 'text'
    },
    gender: {
      label: 'Gender',
      type: 'radio',
      options: [
        { label: "Male", value: 'M'},
        { label: "Female", value: 'F'}
      ]
    }, 
    city: {
      label: 'City',
      type: 'select',
      options: [
        { label: "(choose one)", value: ''},
        { label: "Vadodara", value: '390001'},
        { label: "Surat", value: '390003'},
        { label: "Nadiad", value: '390032'}
      ],
    }
  }