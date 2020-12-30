import { useRouter } from 'next/router'

import { Text, Container } from '@components/ui'
import { Layout } from '@components/common'

import useSWR from 'swr'

export default function Result() {
    const router = useRouter()
    const { data, error } = useSWR(
        router.query.session_id
            ? `/api/checkout/${router.query.session_id}`
            : null,
        (url) => fetch(url).then(res => res.json())
    )
    if (error) return <div>failed to load</div>

    return (
        <Container>
            <div>
                <Text variant='pageHeading'>
                    {data && data.session.payment_intent.status === 'succeeded' ? 'Payment successful!' : 'Loading...'}
                </Text>
                <Text variant="body">Our team will be in touch with you soon. In the meantime, check us on the social media and explore a few reasons to join Become Athlete.</Text>
            </div>
            <style jsx>{`
                div {
                    margin-top: 80px;
                    margin-bottom: 50px;
                    text-align: center;
                    }
            `}</style>
        </Container>
    )
}

Result.Layout = Layout
