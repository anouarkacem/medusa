"use client"

import getSectionId from "@/utils/get-section-id"
import { OpenAPIV3 } from "openapi-types"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { useSidebar } from "@/providers/sidebar"
import dynamic from "next/dynamic"
import Loading from "@/components/Loading"
import type { SectionProps } from "../../Section"
import type { MDXContentClientProps } from "../../MDXContent/Client"
import type { TagSectionPathsProps } from "../Paths"

type TagSectionProps = {
  tag: OpenAPIV3.TagObject
} & React.HTMLAttributes<HTMLDivElement>

const TagPaths = dynamic<TagSectionPathsProps>(async () => import("../Paths"), {
  loading: () => <Loading />,
}) as React.FC<TagSectionPathsProps>

const Section = dynamic<SectionProps>(async () => import("../../Section"), {
  loading: () => <Loading />,
}) as React.FC<SectionProps>

const MDXContentClient = dynamic<MDXContentClientProps>(
  async () => import("../../MDXContent/Client"),
  {
    loading: () => <Loading />,
  }
) as React.FC<MDXContentClientProps>

const TagSection = ({ tag }: TagSectionProps) => {
  const { setActivePath } = useSidebar()
  const [loadPaths, setLoadPaths] = useState(false)
  const slugTagName = getSectionId([tag.name])
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView && !loadPaths) {
        setLoadPaths(true)
      }
      if (inView) {
        // ensure that the hash link doesn't change if it links to an inner path
        const currentHashArr = location.hash.replace("#", "").split("_")
        if (currentHashArr.length < 2 || currentHashArr[0] !== slugTagName) {
          // can't use next router as it doesn't support
          // changing url without scrolling
          history.pushState({}, "", `#${slugTagName}`)
          setActivePath(slugTagName)
        }
      }
    },
  })

  return (
    <div className="min-h-screen" id={slugTagName} ref={ref}>
      <h2>{tag.name}</h2>
      {tag.description && (
        <Section addToSidebar={false}>
          <MDXContentClient content={tag.description} />
        </Section>
      )}
      {loadPaths && <TagPaths tag={tag} />}
      {!loadPaths && <Loading />}
    </div>
  )
}

export default TagSection