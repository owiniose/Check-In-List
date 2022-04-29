import styled from "styled-components"
import dude from '../../../public/images/logo.png'


export const SectionTeam = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0 " } ;
  margin: 20px auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color : white;
  background-image: url(${dude});
  background-position: center;
  background-attachment: fixed;
  background-size: 700px 700px;
  background-repeat: no-repeat;
 

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "0 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
    text-align: center;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: black;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const SecondaryBtn = styled.button`
  color: #FFF;
  background: black;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.1em;
  margin:0 auto 10px;
  display:block;
  
  
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: gold;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 12px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const SectionAbout = styled.p`
 
  font-size: 20px;
  /* line-height: 20px; */
  padding-bottom: 3.6rem;
  color: black;
  font-weight: 600;

  

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    text-align: left;
  }
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background: #03989e;
  padding :1em;
  border-radius: 11px;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`
export const ListContainerLast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`
export const SectionTextWorks = styled.h3`
  background-color:white;  
  font-weight: 800;
  font-size: ${(props) => props.main ? '75px' : '64px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  max-width: 100%;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '5px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '4px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '6px 0 8px' : '0'};
    align-content: center;
  }
`

export const ListTitle = styled.h4`
  
  padding-top:1em;
  padding-bottom:0.3em;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 1px;
  color: black;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
    }
    
    @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    font-weight: bolder;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 2px;
    text-align: left;
    

}
`

export const ListLast = styled.h4`
  
font-size: 18px;
  line-height: 30px;
  color: black;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
    }
    
    @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
    text-align: left;
    

}
`

export const ListParagraph = styled.p`

font-size: 16px;
line-height: 28px;
font-weight: light;

letter-spacing: 0.02em;
color: #FFFFFF;
margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 10px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 14px;
  line-height: 22px;
  text-align: left;



 }
`



export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  text-align:left;
  flex-direction: column;
  max-width: 80%;
}
`
export const ListItem2 = styled.li`
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  text-align:left;
  flex-direction: column;
}
`

export const ListIcon = styled.img`
display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

