import Form from '@/components/signin/Form'
import { useAlertContext } from '@/contexts/AlertContext'
import { FormValues } from '@/models/signin'
import { auth } from '@/remote/firebase'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function SigninPage() {
  const navigate = useNavigate()
  const { open } = useAlertContext()

  const handleSubmit = useCallback(async (formValues: FormValues) => {
    const { email, password } = formValues
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)

      navigate('/')
    } catch (e) {
      if (e instanceof FirebaseError) {
        if (e.code === 'auth/wrong-password') {
          open({
            title: '계정의 정보를 다시 확인해주세요',
            onButtonClick: () => {},
          })
          return
        }
      }

      open({
        title: '잠시 후 다시 시도해주세요',
        onButtonClick: () => {},
      })
    }
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
