import Link from "@/node_modules/next/link"

export default function FooterMenu({ title, options  }:{title: string, options:{ title: string, url: string}[]}) {
    return (
        <>
        <div className="flex flex-col  text-[12px] md:text-base">
            <p className="title font-bold mb-[33px]">{title}</p>

            { options.map( (val, key) => {
                return(
                    <Link href={val.url} key={key} className={'font-light'} >{val.title}</Link>
                )
            })
                
            }

        </div>
        
        </>
    )
}