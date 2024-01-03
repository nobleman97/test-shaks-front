import Link from "@/node_modules/next/link"

export default function FooterMenu({ title, options  }:{title: string, options:{ title: string, url: string}[]}) {
    return (
        <>
        <div className="flex flex-col">
            <p className="title font-semibold mb-[33px]">{title}</p>

            { options.map( (val, key) => {
                return(
                    <Link href={val.url} key={key} >{val.title}</Link>
                )
            })
                
            }

        </div>
        
        </>
    )
}