import React from 'react'
import {Formik, Field, Form as FormikForm} from 'react'

const Form = ({fields, btnName = "Submit", ...props}) => {
    return (
       <Formik {...props}>
           {() => {
                    <FormikForm>
                        {
                            fields.map((field) => (<Field key={field.name} {...field} />))                        }
                    </FormikForm>
               }
           }
           <button type="submit">
            {btnName}
           </button>
       </Formik>
    )
}

export default Form
