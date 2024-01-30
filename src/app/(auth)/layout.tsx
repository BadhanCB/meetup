type Props = {
    children: React.ReactNode
}

const AuthLayout = ({children}: Props) => {
  return (
    <main className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">{children}</main>
  )
}

export default AuthLayout;